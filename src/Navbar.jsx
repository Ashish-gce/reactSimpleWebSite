import React from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         marginRight: theme.spacing(3),
//     },
// }));

const Navbar = () => {
    // const classes = useStyles();

    return (
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" /* href="#" */ to="/">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Dynasty_2017_logo.jpg"
                                        className="mr-3"
                                    />
                                    DYNASTY website
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" activeClassName="menu-active" /* href="#" */ exact to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu-active" /* href="#" */ to="" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu-active" /* href="#" */ to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu-active" /* href="#" */ to="/service">Service</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;