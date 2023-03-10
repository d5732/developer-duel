const inspectUserUrl = "http://localhost:3000/api/user/";
const duelUsersUrl = "http://localhost:3000/api/users?";

const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
export const isValidUsername = (username) => {
    return githubUsernameRegex.test(username);
};

export const validateUsername = (username, { error, setError }) => {
    const valid = isValidUsername(username);
    if (valid === false && error === "") {
        setError("That's not a valid GitHub username!");
    } else if (valid === true && error !== "") {
        setError("");
    }
    return valid;
};

export const inspectUser = async (username = "andrew") => {
    // await response of fetch call
    let response = await fetch(inspectUserUrl + username);
    // only proceed once promise is resolved
    let data = await response.json();
    console.log(data);
    // only proceed once second promise is resolved
    return data;
};

export const duelUsers = async (user1 = "fabpot", user2 = "andrew") => {
    // await response of fetch call
    let response = await fetch(
        duelUsersUrl + `username=${user1}&username=${user2}`
    );
    // only proceed once promise is resolved
    let data = await response.json();
    console.log(data);
    // only proceed once second promise is resolved
    return data;
};
