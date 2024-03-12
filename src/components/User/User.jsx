import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { name, username, email, id } = user;
    return (
        <div className="border-4 border-sky-500 p-5 rounded-2xl">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{username}</p>
            <p>{email}</p>
            <button className="btn bg-black text-white p-2 rounded-md my-2">
                <Link to={`/user/${id}`}>Show Details</Link>
            </button>
        </div>
    );
};

export default User;
