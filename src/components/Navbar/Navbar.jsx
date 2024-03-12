import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="flex justify-center gap-5 list-none">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/comments">Comments</Link>
            </ul>
        </div>
    );
};

export default Navbar;
