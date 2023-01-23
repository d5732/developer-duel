import { Description, Separator } from "./Home.styles";
import { Main, ButtonLink } from "../Shared/Shared.styles";

const Home = () => {
    return (
        <Main>
            <h1 style={{ marginTop: "17rem", marginBottom: "7.8rem" }}>
                Welcome to Dev-Duel
            </h1>
            <div
                style={{ display: "flex", gap: "6.7rem", textAlign: "center" }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <ButtonLink className="button" to="/inspect">
                        Inspect
                    </ButtonLink>
                    <Description>
                        Look up a fellow dev's GitHub info.
                    </Description>
                </div>
                <Separator />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <ButtonLink className="button" to="/duel">
                        Duel
                    </ButtonLink>
                    <Description>Pick two devs to go head to head.</Description>
                </div>
            </div>
        </Main>
    );
};
export default Home;
