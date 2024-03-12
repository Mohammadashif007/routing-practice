import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{details.id}</h2>
            <h1>{details.name}</h1>
            <p>{details.email}</p>
            <button onClick={handleNavigate} className="btn btn-primary">Go Back</button>
        </div>
    );
};

export default UserDetails;