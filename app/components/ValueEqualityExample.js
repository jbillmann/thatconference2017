import React from 'react';

export default class ValueEqualityExample extends React.Component {
    render() {
        return (
            <div>
                <h1>Value Equality Example</h1>
                <hr />
                <code>{'// Slow'}</code>
                <code>{'function deepValueCompare(object1, object2) { // tons of code to recursively compare the values of each object }'}</code>
                <br />
            </div>
        );
    }
};