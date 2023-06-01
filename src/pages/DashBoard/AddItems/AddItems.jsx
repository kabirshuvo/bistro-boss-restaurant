import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItems = () => {
  const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = (data) => {
   const formData = new FormData();
   formData.append('image', data.image[0])


    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if (imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name, price, category, recipe} = data;
        const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
        
        console.log(newItem )
        axiosSecure.post('/menu', newItem)
        .then(data => {
          console.log('after posting new menu item', data.data)
          if(data.data.insertedId){
            reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Menu Item Added successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  };
  console.log(errors);

  return (
    <div className="w-full justify-center items-center flex flex-col my-16">
      <div className="w-full mb-16">
        <SectionTitle
          heading="Add an Item"
          subHeading="Whats new"
        ></SectionTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            {...register("name", { required: true, maxLength: 30 })}
            className="input input-bordered w-full max-w-xs mb-4"
          />
        </div>
        <div className="flex gap-7">
          {/* Category Sellection */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Please Sellect A Category*
              </span>
            </label>
            <select
            defaultValue='Pick one'
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled >
                Pick one
              </option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
              <option>Others</option>
              <option>Anonymous</option>
            </select>
          </div>
          {/* Price Section */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Input the Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Text Area : Recipe Details */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-40"
            placeholder="Add Recipe Details"
          ></textarea>
        </div>
        {/* Add File  */}
        <div className="flex items-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Item Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <input
            className="btn btn-sm mt-9 ms-4 "
            type="submit"
            value="Add My Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItems;
