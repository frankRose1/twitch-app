import React from 'react';

const GridItem = props => {
    let streamStatus = props.streamStatus;
    if (streamStatus.length > 60) {
        streamStatus = `${props.streamStatus.substr(0, 60)}...`
    }

    return (
        <div className="grid-item" data-id={props.id} onClick={() => props.showModalHandler(props.id)}>
            <img className="streamer-logo" src={props.streamLogo} alt="Streamer Logo"/>
            <div className="channel-info">
                <h3 className="name">{props.streamTitle}</h3>
                <p className="status">{streamStatus}</p>
            </div>
        </div>
    );
};

export default GridItem;