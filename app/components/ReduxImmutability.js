import React from 'react';

export default class ReduxImmutability extends React.Component {
    render() {
        return (
            <div>
                <h1>Redux Immutability</h1>
                <hr />
                <p>Shallow/reference equality check</p>
                <p>Performance boost (compare and render)</p>
            </div>
        );
    }
};