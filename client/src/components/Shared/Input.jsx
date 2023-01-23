import { isValidUsername } from "../../services/userService";
import { TextInput } from "./Shared.styles";
import ErrorTooltip from "./ErrorTooltip";

const Input = ({ username, setUsername, error, setError, comparand }) => {
    const handleInput = (e) => {
        setUsername(e.target.value);
        if (!isValidUsername(e.target.value, { error, setError })) {
            setError("Invalid username");
        } else if (e.target.value === comparand) {
            setError("Cannot duel self");
        } else if (error && isValidUsername(e.target.value)) {
            setError();
        }
    };
    const handleBlur = () => {
        if (error === "Cannot duel self") {
            setError();
        }
    };

    const handleFocus = () => {
        if (username === comparand) {
            setError("Cannot duel self");
        }
    };

    return (
        <div style={{ position: "relative" }}>
            {error && username && <ErrorTooltip text={error} />}
            <TextInput
                placeholder="username"
                onInput={handleInput}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
        </div>
    );
};

export default Input;
