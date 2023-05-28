import { Helmet } from "react-helmet-async";
import { FaRemoveFormat } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const total = cart.reduce((sum, row) => row.price + sum, 0);

  const handleDelete = (row)=> {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't to delete it ..)",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${row._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your Food has been deleted.',
                    'success'
                )
            }
        })
        }
      })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex flex-col justify-evenly items-center mb-8">
        <h3 className="text-1xl">
          Total <span className="text-purple-700">{cart.length}</span> Items in
          my cart{" "}
        </h3>
        <h3 className="text-1xl">
          Total Price: <span className="text-purple-700">$ {total}</span>{" "}
        </h3>
        <button className="btn btn-sm">Pay Now</button>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((row, index) => (
                <tr key={row._id}>
                  <td>#{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    {row.name}
                  </td>
                  <td className="text-end">$ {row.price}</td>
                  <td>
                    <button onClick={()=>handleDelete(row)} className="btn btn-ghost btn-xs "><FaRemoveFormat></FaRemoveFormat> <span className="text-warning ms-2">delete item</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>
                  <h3 className="text-1xl">
                    Total{" "}
                    <span className="text-purple-700 mx-2 font-bold text-2xl">
                      {cart.length}
                    </span>
                    items
                  </h3>
                </th>
                <th>
                  {" "}
                  <h3 className="text-1xl">
                    Total Price:{" "}
                    <span className="text-purple-700 mx-2 font-bold text-2xl">
                      $ {total}
                    </span>{" "}
                  </h3>
                </th>
                <th></th>
                <th>
                  <button className="btn btn-sm">Pay Now</button>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
