import React from 'react';
import PropTypes from 'prop-types'

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

Hello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

Hello.defaultProps = {
    name: 'pytran'
};

export default Hello;
