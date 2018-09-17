import React from 'react';
import Aux from '../../hoc/Auxilliary';
import Banner from './Banner';

const Streamer = props => {
    const data = props.streamerInfo;
    const audiences = data.mature ? 'For Mature Audiences' : 'For All Audiences';
    const partnered = data.partner ? 'Twitch Partner' : "Follow me on Twitch to help me get partnered!";

    return (
        <Aux>
            <Banner banner={data.video_banner}
                    logo={data.logo}
                    hideModalHandler={props.hideModalHandler}/>
            <div className="streamer-info">
                <div className="modal-intro">
                    <img src={data.logo} alt="Streamer Logo" className="modal-logo" />
                    <h3 className="modal-title">{data.display_name}</h3>
                </div>
                <div className="modal-row">
                    <div className="modal-col m-col1">
                        <h4><strong>Stream Info:</strong></h4>
                        <p>Total Views: <span className="views">{data.views}</span></p>
                        <p>Followers: <span className="followers">{data.followers}</span></p>
                        <p className="audience">{audiences}</p>
                    </div>
                    <div className="modal-col m-col2">
                        <p>Currently Playing: <span className="playing">{data.game}</span></p>
                        <p className="partner">{partnered}</p>
                        <a href={data.url} target="_blank" className="twitch-link">View on Twitch</a>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export default Streamer;