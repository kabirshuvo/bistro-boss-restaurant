import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h3>Regular User Home {user.displayName}</h3>
        </div>
    );
};

export default UserHome;