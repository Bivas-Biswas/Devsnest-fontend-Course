import './styles/App.css';
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {AuthContex} from "./contex/AuthContex";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>

                <Link to="/dashboard">Dashboard</Link>

            </nav>

            <Switch>
                <AuthContex>
                    <main>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
                    </main>
                </AuthContex>
            </Switch>
        </Router>
    );
}

export default App;
