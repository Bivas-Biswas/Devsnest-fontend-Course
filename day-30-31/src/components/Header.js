import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    const [toggle, setToggle] = useState(true)
    return (
        <div className='header-container'>
            <Link to='/'>
                <h1>Ecommerce App</h1>
            </Link>
            {
                toggle ?
                    <Link to='cart'>
                        <button onClick={()=> setToggle(!toggle)}>Cart</button>
                    </Link> :
                    <Link to='/'>
                        <button onClick={()=> setToggle(!toggle)}>Home</button>
                    </Link>
            }


        </div>
    );
}

export default Header;