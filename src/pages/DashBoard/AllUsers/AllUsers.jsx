import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaAward, FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`http://localhost:5000/users`);
    return res.json();
  });

  // TODO:
  const handleDelete = () => {};

  return (
    <>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div className="text-slate-700">
        users Count: {users.length}
        <h3>
          All Users <FaUsers />
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th># SL:</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th># {index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {/* <td></td> */}
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button className="btn btn-ghost btn-xs bg-info ">
                        <FaAward />
                        <span className="text-slate-700 ms-2">
                          <small>Update USER</small>
                        </span>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(row)}
                      className="btn btn-ghost btn-xs "
                    >
                      <FaTrashAlt></FaTrashAlt>{" "}
                      <span className="text-warning ms-2">delete USER</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
