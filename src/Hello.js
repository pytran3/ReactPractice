import React from 'react';

function Hello(props) {
    if (typeof props.name === "string") {
        return (
            <h1>Hello, {props.name}</h1>
        )
    }
    return (
        <h1>Who are you?</h1>
    )
}

export default Hello;
