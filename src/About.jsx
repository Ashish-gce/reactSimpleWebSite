import React from 'react';
import image from "../src/images/study.svg";
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                name=" Welcome to About Page. "
                imgsrc={image}
                visit="/contact"
                btnName="Read More"

            />
        </>
    );
};

export default About;