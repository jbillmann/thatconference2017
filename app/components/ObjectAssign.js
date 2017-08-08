import React from 'react';

export default class ObjectAssign extends React.Component {
    render() {
        return (
            <div>
                <h1>Object.assign(target, ...sources)</h1>
                <hr />
                <p><i>The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.</i></p>
                <code>{'var currentState = { firstName: "Jeremiah", lastName: "Billmann" };'}</code>
                <code>{'var newState = Object.assign({}, currentState, { middleName: "C" });'}</code>
                <br />
            </div>
        );
    }
};