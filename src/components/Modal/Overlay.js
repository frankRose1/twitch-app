import React from 'react';

const Overlay = props => props.show ? <div className="overlay" onClick={props.hideModalHandler}></div> : null;

export default Overlay;