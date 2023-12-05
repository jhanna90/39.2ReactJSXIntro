import React from 'react';

const Person = (props) => {
    const truncatedName = props.name.length > 8 ? props.name.substring(0, 6) + '...' : props.name;

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{truncatedName}</p>
            {props.age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

export default Person;