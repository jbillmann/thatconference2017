import React from 'react';

export default class Immutability extends React.Component {
    render() {
        return (
            <div>
                <h1>Immutability</h1>
                <hr />
                <p>Redux reducers are pure functions that must not mutate state</p>
                <p>If given an action and the current state then we must return a brand new state</p>
                <p>It's about the data</p>
            </div>
        );
    }
};