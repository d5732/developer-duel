import { useState } from "react";
import { duelUsers } from "../../services/userService";
import Input from "../Shared/Input";
import Profile from "../Shared/Profile";
import ResponseError from "../Shared/ResponseError";
import { Button, Main } from "../Shared/Shared.styles";

const Duel = () => {
    const [responseError, setResponseError] = useState();
    const [profileData0, setProfileData0] = useState();
    const [profileData1, setProfileData1] = useState();
    const [error0, setError0] = useState("");
    const [error1, setError1] = useState("");
    const [username0, setUsername0] = useState("");
    const [username1, setUsername1] = useState("");
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
        //todo: can there be a tie?
        //todo: what happens if username0===username1?
        const res = await duelUsers(username0, username1);
        if (res?.message) {
            setResponseError(res.message);
        } else {
            console.log(res[0]);
            console.log(res[1]);
            setProfileData0(res[0]);
            setProfileData1(res[1]);
            if (JSON.stringify(res[0]) > JSON.stringify(res[1])) {
                // 0 wins
                console.log("duel result: winner is", res[0].username);
            } else {
                // 1 wins
                console.log("duel result: winner is", res[1].username);
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
            <div style={{ display: "flex", gap: "2rem" }}>
                {profileData0 && <Profile data={profileData0} />}
                {profileData1 && <Profile data={profileData1} />}
                {responseError && <ResponseError message={responseError} />}
                {username0 && username1 && username0 === username1 && (
                    <ResponseError message={"Cannot duel self"} />
                )}
            </div>
        </Main>
    );
};

export default Duel;

// [
//     {
//         username: "fabpot",
//         name: "Fabien Potencier",
//         location: "Lille, France",
//         bio: "CEO at Symfony, CPO at Platform.sh\r\n",
//         avatar_url: "https://avatars.githubusercontent.com/u/47313?v=4",
//         titles: ["Forker", "Mr. Popular"],
//         "favorite-language": "PHP",
//         "public-repos": 72,
//         "total-stars": 1231,
//         "highest-starred": 1000,
//         "perfect-repos": 2,
//         followers: 12755,
//         following: 0,
//     },
//     {
//         username: "andrew",
//         name: "Andrew Nesbitt",
//         location: "UK",
//         bio: "Software engineer and researcher",
//         avatar_url: "https://avatars.githubusercontent.com/u/1060?v=4",
//         titles: ["Forker"],
//         "favorite-language": "JavaScript",
//         "public-repos": 309,
//         "total-stars": 62,
//         "highest-starred": 23,
//         "perfect-repos": 11,
//         followers: 3083,
//         following: 3161,
//     },
// ];
