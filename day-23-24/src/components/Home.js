import React,{useContext} from 'react';
import LoginContext from "../contex/AuthContex";

function Home() {
    const handleLog = useContext(LoginContext)
    return (
        <>
            <h1>Home</h1>
            <h2>If not logged in cant access, Profile & Dashboard</h2>
            <button onClick={handleLog.log}>
                {handleLog.loggedIn ? "Logout" : "Login"}
            </button>
        </>
    );
}

export default Home;