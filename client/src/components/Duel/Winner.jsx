import React from "react";

const Winner = ({ style }) => {
    return (
        <h2
            style={{
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "48px",
                textAlign: "center",
                ...style,
            }}
        >
            <span
                style={{ display: "inline-block", transform: "scale(-1, 1)" }}
            >
                ⚐
            </span>{" "}
            Winner!!! ⚐
        </h2>
    );
};

export default Winner;
