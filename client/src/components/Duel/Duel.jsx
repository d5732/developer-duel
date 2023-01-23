import { useState } from "react";
import { duelUsers } from "../../services/userService";
import Input from "../Shared/Input";
import ProfileCard from "../Shared/ProfileCard";
import Error from "../Shared/Error";
import Winner from "./Winner";
import Tie from "./Tie";
import { Button, Main } from "../Shared/Shared.styles";

const Duel = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [profileData0, setProfileData0] = useState();
    const [profileData1, setProfileData1] = useState();
    const [inputError0, setInputError0] = useState("");
    const [inputError1, setInputError1] = useState("");
    const [username0, setUsername0] = useState("");
    const [username1, setUsername1] = useState("");
    const [winner, setWinner] = useState();
    const [tie, setTie] = useState();
    const props0 = {
        error: inputError0,
        setError: setInputError0,
        username: username0,
        setUsername: setUsername0,
        comparand: username1,
    };
    const props1 = {
        error: inputError1,
        setError: setInputError1,
        username: username1,
        setUsername: setUsername1,
        comparand: username0,
    };

    const handleDuelUsers = ({ username0, username1 }) => {
        setLoading(true);
        setError();
        setProfileData0();
        setProfileData1();
        setWinner();
        setTie();

        duelUsers(username0, username1)
            .then((res) => {
                if (res?.message) {
                    console.log("res:", res);
                    setError(res.message);
                } else {
                    setProfileData0(res[0]);
                    setProfileData1(res[1]);
                    if (res[0]["total-stars"] === res[1]["total-stars"]) {
                        setTie(true);
                    } else if (res[0]["total-stars"] > res[1]["total-stars"]) {
                        console.log("duel result: winner is", res[0].username);
                        setWinner(0);
                    } else {
                        console.log("duel result: winner is", res[1].username);
                        setWinner(1);
                    }
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
            <div style={{ display: "flex", gap: "8rem" }}>
                <Input {...props0} />
                <Input {...props1} />
            </div>
            <Button
                disabled={
                    loading ||
                    inputError0 ||
                    inputError1 ||
                    username0 === username1
                }
                loading={loading ? "true" : undefined}
                onClick={() => {
                    handleDuelUsers({ username0, username1 });
                }}
            >
                Duel
            </Button>

            {loading && <div>Loading...</div>}
            {error && <Error message={error} />}

            {tie === true && <Tie />}
            {winner === 0 && (
                <Winner style={{ marginRight: "calc(649px + 1rem)" }} />
            )}
            {winner === 1 && (
                <Winner style={{ marginLeft: "calc(649px + 1rem)" }} />
            )}
            <div style={{ display: "flex", gap: "1rem" }}>
                {profileData0 && (
                    <ProfileCard
                        data={profileData0}
                        isWinner={winner === 0}
                        tie={tie}
                    />
                )}
                {profileData1 && (
                    <ProfileCard
                        data={profileData1}
                        isWinner={winner === 1}
                        tie={tie}
                    />
                )}
            </div>
        </Main>
    );
};

export default Duel;
