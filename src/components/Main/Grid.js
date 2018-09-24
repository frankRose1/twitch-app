/**
 * Create a grid item for each response from twtich
 */

import React from 'react';
import GridItem from './GridItem';
import Loading from '../Loading/Loading';

const Grid = props => {
    if (props.isLoading) {
        return <Loading />
    } else {
        return (
            <div className="container">
                <h2 className="sub-title">Check out these featured streams!</h2>
                <div className="grid">
                    {props.streams.map(s => (
                        <GridItem
                            showModalHandler={props.showModalHandler}
                            key={s.stream.channel.name}
                            id={s.stream.channel.name}
                            streamLogo={s.stream.channel.logo}
                            streamTitle={s.stream.channel.display_name}
                            streamStatus={s.stream.channel.status}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Grid;