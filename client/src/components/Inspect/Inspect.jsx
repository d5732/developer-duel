import { useState } from "react";
import { inspectUser } from "../../services/userService";
import ProfileCard from "../Shared/ProfileCard";
import Input from "../Shared/Input";
import ResponseError from "../Shared/ResponseError";
import { Button, Main } from "../Shared/Shared.styles";

const Inspect = () => {
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [responseError, setResponseError] = useState();

    const handleInspectUser = (username) => {
        setResponseError();
        setProfileData();
        setLoading(true);
        console.log("inspect:", username);
        inspectUser(username).then((res) => {
            if (res?.message) {
                console.log("res:", res);
                setLoading(false);
                setResponseError(res.message);
                // not found schema, error it up
            } else {
                setLoading(false);
                setProfileData(res);
            }
        });
    };

    return (
        <Main>
            <Input
                error={error}
                setError={setError}
                username={username}
                setUsername={setUsername}
            />
            <Button
                disabled={error}
                onClick={() => {
                    handleInspectUser(username);
                    // dummyInspectUser(username);
                }}
            >
                Inspect
            </Button>
            {loading && <div>Loading...</div>}
            {profileData && <ProfileCard data={profileData} />}
            {responseError && <ResponseError message={responseError} />}
        </Main>
    );
};

export default Inspect;
