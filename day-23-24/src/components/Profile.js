import React, {useContext} from 'react';
import LoginContext from "../contex/AuthContex";
import {Route, Redirect} from "react-router-dom";

function Profile() {
    const handleLog = useContext(LoginContext)
    return (
        <div>
            <Route>
            {
                handleLog.loggedIn ?
                    <h2>Profile</h2>:
                <Redirect to='/'/>
            }
            </Route>
            </div>
            );
}

export default Profile;