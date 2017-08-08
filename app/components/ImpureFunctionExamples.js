import React from 'react';

export default class ImpureFunctionExamples extends React.Component {
    render() {
        return (
            <div>
                <h1>Impure Functions</h1>
                <hr />
                <code>{'var countState = 0;'}</code>
                <br />
                <code>{'// Impure'}</code>
                <code>{`function incrementCount(val) { 
    countState = countState + val; 
}`}</code>
                <code>{'incrementCount(10);'}</code>
                <br />
                <code>{'// Impure'}</code>
                <code>{`function hasCountBeenIncremented() { 
    return countState > 0;
}`}</code>
                <code>{'hasCountBeenIncremented();'}</code>
            </div>
        );
    }
};