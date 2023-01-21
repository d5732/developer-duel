import { useState } from "react";
import { inspectUser } from "../../services/userService";
import Profile from "../Shared/Profile";
import Input from "../Shared/Input";
import ResponseError from "../Shared/ResponseError";
import { Button, Main } from "../Shared/Shared.styles";

const Inspect = () => {
    const [profileData, setProfileData] = useState();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [responseError, setResponseError] = useState();

    const handleInspectUser = (username) => {
        console.log("inspect:", username);
        inspectUser(username).then((res) => {
            if (res?.message) {
                console.log("res:", res);
                setResponseError(res.message);
                // not found schema, error it up
            } else {
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
            {profileData && <Profile data={profileData} />}
            {responseError && <ResponseError message={responseError} />}
        </Main>
    );
};

export default Inspect;
