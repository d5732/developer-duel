import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from "./services/userService";
import { useEffect } from "react";
import { Home } from "./components/Home";

function App() {
    // Hook that runs after React has updated the DOM
    useEffect(() => {
        inspectUser();
    }, []);

    return (
        <Router>
            <GlobalStyles />
            <Navbar />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
