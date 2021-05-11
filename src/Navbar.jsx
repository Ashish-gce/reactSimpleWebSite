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
                                {/* <Link className="navbar-brand" to="/">
                                    <img
                                        src="https://lh3.googleusercontent.com/-3n9Wzdb4u3c/AAAAAAAAAAI/AAAAAAAAAAA/EtF-n0eDFW0/s44-p-k-no-ns-nd/photo.jpg"
                                        className="mr-3"
                                    />
                                    Readers Rejoice Library
                                </Link> */}

                                <Link className="navbar-brand" to="/">
                                    <img style={{ height: '7.5vh' }}
                                        src="https://www.techonline.com/wp-content/uploads/2020/10/tol-logo-1.png?w=300"
                                        className="mr-3"
                                    />
                                    TechOnline
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