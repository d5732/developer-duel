import { useState } from "react";
import { duelUsers } from "../../services/userService";
import Input from "../Shared/Input";
import ProfileCard from "../Shared/ProfileCard";
import ResponseError from "../Shared/ResponseError";
import Winner from "./Winner";
import { Button, Main } from "../Shared/Shared.styles";

const Duel = () => {
    const [loading, setLoading] = useState(false);
    const [responseError, setResponseError] = useState();
    const [profileData0, setProfileData0] = useState();
    const [profileData1, setProfileData1] = useState();
    const [error0, setError0] = useState("");
    const [error1, setError1] = useState("");
    const [username0, setUsername0] = useState("");
    const [username1, setUsername1] = useState("");
    const [winner, setWinner] = useState();
    const props0 = {
        error: error0,
        setError: setError0,
        username: username0,
        setUsername: setUsername0,
    };
    const props1 = {
        error: error1,
        setError: setError1,
        username: username1,
        setUsername: setUsername1,
    };

    const handleDuelUsers = async ({ username0, username1 }) => {
        setResponseError();
        setProfileData0();
        setProfileData1();
        setWinner();
        setLoading(true);
        //todo: can there be a tie?
        //todo: what happens if username0===username1?
        const res = await duelUsers(username0, username1);
        if (res?.message) {
            setLoading(false);
            setResponseError(res.message);
        } else {
            setLoading(false);
            console.log(res[0]);
            console.log(res[1]);
            setProfileData0(res[0]);
            setProfileData1(res[1]);
            if (JSON.stringify(res[0]) > JSON.stringify(res[1])) {
                // 0 wins
                console.log("duel result: winner is", res[0].username);
                setWinner(0);
            } else {
                // 1 wins
                console.log("duel result: winner is", res[1].username);
                setWinner(1);
            }
        }
    };

    return (
        <Main>
            <div style={{ display: "flex", gap: "8rem" }}>
                <Input {...props0} />
                <Input {...props1} />
            </div>
            <Button
                disabled={error0 || error1 || username0 === username1}
                onClick={() => {
                    console.log("duel:", username0, username1);
                    handleDuelUsers({ username0, username1 });
                }}
            >
                Duel
            </Button>
            {username0 && username1 && username0 === username1 && (
                <ResponseError message={"Cannot duel self"} />
            )}
            {loading && <div>Loading...</div>}
            {winner === 0 && <Winner style={{ color: "pink" }} />}
            {winner === 1 && <Winner />}
            <div style={{ display: "flex", gap: "1rem" }}>
                {responseError && <ResponseError message={responseError} />}
                {profileData0 && <ProfileCard data={profileData0} />}
                {profileData1 && <ProfileCard data={profileData1} />}
            </div>
        </Main>
    );
};

export default Duel;
