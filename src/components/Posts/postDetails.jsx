import { Link, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const details = useLoaderData();
    const naviagate = useNavigate();
    console.log(details);
    const hadelGoBack = () => {
        naviagate(-1)
    }
    return (
        <div>
            <h1>Post details</h1>
            <p>{details.id}</p>
            <p>{details.title}</p>
            <button onClick={hadelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;
