import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className="border-2 border-red-600 rounded-2xl">
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button><Link to={`/post/${id}`}>View Post</Link></button>
        </div>
    );
};

export default Post;
