import React from 'react';

const Banner = props => {
    return (
        <div className="banner">
            <img src={props.banner || props.logo} alt="Streamer Banner" className="banner-img" />
            <i className="fas fa-times close" onClick={props.hideModalHandler}></i>
        </div>
    );
};

export default Banner;