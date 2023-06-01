import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div className="w-full p-7">
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up"
      ></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                menu.map(item => <tr key={item._id}>
                    <td>
                     # 1
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                         
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                    </td>
                    <td>Purple</td>
                    <td>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </td>
                    <td>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
