import React from 'react';

const Tweet = (props) => {
    return (
        <div>
            <p>{props.username} ({props.name}) - {props.date}</p>
            <p>{props.message}</p>
        </div>
    );
};

export default Tweet;