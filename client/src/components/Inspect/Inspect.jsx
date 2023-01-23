import { useState } from "react";
import { inspectUser } from "../../services/userService";
import ProfileCard from "../Shared/ProfileCard";
import Input from "../Shared/Input";
import Error from "../Shared/Error";
import { Button, Main } from "../Shared/Shared.styles";

const Inspect = () => {
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState();
    const [inputError, setInputError] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState();

    const handleInspectUser = (username) => {
        setLoading(true);
        setError();
        setProfileData();

        inspectUser(username)
            .then((res) => {
                if (res?.message) {
                    console.log("res:", res);
                    setError(res.message);
                } else {
                    setProfileData(res);
                }
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Main>
            <Input
                error={inputError}
                setError={setInputError}
                username={username}
                setUsername={setUsername}
            />
            <Button
                disabled={!username || loading || inputError}
                loading={loading ? "true" : undefined}
                onClick={() => {
                    handleInspectUser(username);
                    // dummyInspectUser(username);
                }}
            >
                Inspect
            </Button>
            {loading && <div>Loading...</div>}
            {profileData && <ProfileCard data={profileData} />}
            {error && <Error message={error} />}
        </Main>
    );
};

export default Inspect;
