import React from 'react';

export default class SpreadOperator extends React.Component {
    render() {
        return (
            <div>
                <h1>Spread Operator</h1>
                <hr />
                <p><i>Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.</i></p>
                <code>{'var currentState = { firstName: "Jeremiah", lastName: "Billmann" };'}</code>
                <code>{'var newState = { ...currentState, middleName: "C" });'}</code>
                <p>...</p>
                <code>{'var currentState = [ "Jeremiah", "Jessica" ]'}</code>
                <code>{'var newState = [...currentState, "Chase"];'}</code>
            </div>
        );
    }
};