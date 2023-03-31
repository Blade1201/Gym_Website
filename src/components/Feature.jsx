import React from 'react';
import FeatureBox from "./FeatureBox";
import image1 from "../images/1.svg";
import image2 from "../images/2.svg";
import image3 from "../images/3.svg";
import image4 from "../images/4.svg";

const Feature = () => {
    return (
        <div id="features">
            <h1> Jellemzők </h1>
            <div className="a-container">
                <FeatureBox image={image1} title="Súlyemelés"/>
                <FeatureBox image={image2} title="Célzott izom"/>
                <FeatureBox image={image3} title="Tömegelés"/>
                <FeatureBox image={image4} title="Kardió"/>
            </div>
        </div>
    );
};

export default Feature;