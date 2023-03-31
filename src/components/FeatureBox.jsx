import React from 'react';

const FeatureBox = ({title,image}) => {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={image} alt="feature"/>
            </div>

            <div className="a-b-text">
                <h2> {title} </h2>
            </div>

        </div>
    );
};

export default FeatureBox;