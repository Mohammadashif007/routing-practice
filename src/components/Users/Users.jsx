import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    return (
        <div>
            <h1 className="text-2xl font-bold my-10">All Users is here.</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-2">
                {users.map((user) => (
                    <User key={user.id} user={user}></User>
                ))}
            </div>
        </div>
    );
};

export default Users;
