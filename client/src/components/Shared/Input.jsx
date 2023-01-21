import { isValidUsername } from "../../services/userService";
import { ErrorDisplay, TextInput } from "./Shared.styles";

const Input = ({ username, setUsername, error, setError }) => {
    const handleInput = (e) => {
        setUsername(e.target.value);
        console.log(isValidUsername(e.target.value));
        if (!isValidUsername(e.target.value, { error, setError })) {
            !error && setError("Invalid username");
        } else if (error && isValidUsername(e.target.value)) {
            setError("");
        }
    };

    return (
        <div style={{ position: "relative" }}>
            {error && username && <ErrorDisplay>{error}</ErrorDisplay>}
            <TextInput placeholder="username" onInput={handleInput} />
        </div>
    );
};

export default Input;
