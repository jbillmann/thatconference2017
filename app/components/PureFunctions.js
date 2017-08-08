import React from 'react';

export default class PureFunctions extends React.Component {
    render() {
        return (
            <div>
                <h1>Pure Functions</h1>
                <hr />
                <p>Do not depend on or alter state outside of its scope</p>
                <p>Given the same input the function will always produce the same output</p>
                <p>Simplify your code - just need to focus on the return value</p>
            </div>
        );
    }
};