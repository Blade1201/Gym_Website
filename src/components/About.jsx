import React from 'react';
import AboutImage from "../images/about.png";

const About = () => {
    return (
        <div id="about">
            <div className="about-image">
                <img src={AboutImage} alt="about"/>
            </div>
            <div className="about-text">
                <h1> TUDJON MEG TÖBBET RÓLUNK </h1>
                <p> Edzőink szívesen segítenek mindenkinek, teljesen kezdő vendégeinknek díjmentesen bemutatják a gépek használatát
                    (időpont egyeztetése szükséges!). Személyi edzés, edzéstervezés, étrend, táplálékkiegészítők használatával kapcsolatos tanácsok – keresd
                    fel bátran a számodra szimpatikus edzőt.</p>
                <button> Olvasás </button>
            </div>
        </div>
    );
};

export default About;