import React from 'react';
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = useSelector((state: any) => state.user)

    return (
        <>
            <nav className="navbar navbar-expand-lg card">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/img/instagramlogo.png" alt=""/>
                    </a>
                    <div className="search">
                        <input type="text" className="form-control" placeholder={"search"}/>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    <i className="bi bi-house-door-fill"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="bi bi-chat"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="bi bi-compass"/>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="bi bi-heart"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <img src={user.profilePicture} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
