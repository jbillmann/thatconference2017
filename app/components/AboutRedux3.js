import React from 'react';

export default class AboutRedux3 extends React.Component {
    render() {
        return (
            <div>
                <h1>Redux</h1>
                <hr />
                <p>Redux was developed with a focus on the developer experience</p>
                <p><i>I wrote Redux while working on my React Europe talk called “Hot Reloading with Time Travel”.  My goal was to create a state management library with minimal API but completely predictable behavior, so it is possible to implement logging, hot reloading, time travel, universal apps, record and replay, without any buy-in from the developer.</i><b> - Dan Abramov</b></p>
            </div>
        );
    }
};