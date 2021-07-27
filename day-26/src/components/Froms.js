import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateEmailInput, updateUserNameInput } from "../redux/userFrom/userFromActions";


function Froms() {
    const userName = useSelector((state) => state.username)
    const email = useSelector((state) => state.email)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Simple From using React-Redux</h2>
            <form action="">
                <label htmlFor=""><p>UserName :</p></label>
                <input
                    type="text"
                    placeholder='UserName'
                    value={userName}
                    onChange={(e) => dispatch(updateUserNameInput(e.target.value))}/>

                <label htmlFor=""><p>Email : </p></label>
                <input
                    type="email"
                    placeholder='email'
                    value={email}
                    onChange={(e) => dispatch(updateEmailInput(e.target.value))}/>
            </form>
            <div className="showbox">
                <h2>Show</h2>
                <p>UserName : {userName}</p>
                <p>Email : {email}</p>
            </div>
        </div>
    );
}

export default Froms;