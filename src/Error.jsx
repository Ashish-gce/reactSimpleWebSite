import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '2rem',
        color: 'lightgreen',
        textDecoration: 'none',
    },
}));

const Error = () => {
    const classes = useStyles();

    return (
        <>
            <div className="text-center">
                <h1>404 Error Page</h1>
                <p>Sorry! This Page Doesn't Exist.</p>
                <NavLink to="/" className={classes.root}>Go Home</NavLink>
                {/* <NavLink to="/" className="btn btn-outline-primary">Go Home</NavLink> */}
            </div>
        </>
    );
};

export default Error;


// import React from 'react'
// import { NavLink, Link } from 'react-router-dom'

// export default function Error() {
//     return (
//         <div>
//             <div>
//                 <h1> 404 Error Page </h1>
//                 <p>Sorry, This Page doesn't Exist.</p>
//                 <Link to="/" style={{ color: 'Blue', fontSize: '2rem' }}>Go Back</Link>
//             </div>
//         </div>
//     );