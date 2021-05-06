import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "../src/images/home.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                name="The great aim of education is not knowledge but action."
                imgsrc={image}
                visit="/service"
                btnName="Get Start"

            />
        </>
    );
};

export default Home;