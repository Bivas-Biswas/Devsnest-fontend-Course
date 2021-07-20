import React, {useContext} from 'react';
import LoginContext from "../contex/AuthContex";
import {Route, Redirect} from "react-router-dom";

function Dashboard() {
    const loggedIn = useContext(LoginContext)
    return (
        <div>
            <Route>
            {
                loggedIn.loggedIn ? <h1>Dashboard: Private Route</h1>:
                    <Redirect to='/'/>
            }
            </Route>
        </div>
    );
}

export default Dashboard;