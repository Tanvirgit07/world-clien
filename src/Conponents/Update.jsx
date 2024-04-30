import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser)
    return (
        <div>
            <h1>This is update route  : {loadedUser.country_name}</h1>
        </div>
    );
};

export default Update;