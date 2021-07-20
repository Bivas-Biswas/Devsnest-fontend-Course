import React,{useState} from 'react';

const LoginContext = React.createContext(null)

export function AuthContex({children}) {
    const [loggedIn, setLofggedIn] = useState(false)

    const handleLog ={
        loggedIn:loggedIn,
        log: ()=>{
            setLofggedIn(!loggedIn)
        }
    }

    return (
        <LoginContext.Provider value={handleLog}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContext;