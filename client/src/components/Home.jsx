export const Home = () => {
    return (
        <main
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <h1>Welcome to Dev-Duel</h1>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "2rem",
                    }}
                >
                    <button>Inspect</button>
                    <p>Look up a fellow dev's GitHub info.</p>
                </div>
                <div className="separator" style={{ margin: "2rem" }}>
                    |
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "2rem",
                    }}
                >
                    <button>Duel</button>
                    <p>Pick two devs to go head to head.</p>
                </div>
            </div>
        </main>
    );
};
