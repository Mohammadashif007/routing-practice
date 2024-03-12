import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>This is post</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;