import React from 'react';

export default class PureFunctionExamples extends React.Component {
    render() {
        return (
            <div>
                <h1>Pure Functions</h1>
                <hr />
                <code>{'var countState = 0;'}</code>
                <br />
                <code>{'// Pure'}</code>
                <code>{`function incrementCount(count, val) { 
    return count + val;
}`}</code>
                <code>{'countState = incrementCount(countState, 10);'}</code>
                <br />
                <code>{'// Pure'}</code>
                <code>{`function hasCountBeenIncremented(count) { 
    return count > 0;
}`}</code>
                <code>{'hasCountBeenIncremented(countState);'}</code>
            </div>
        );
    }
};