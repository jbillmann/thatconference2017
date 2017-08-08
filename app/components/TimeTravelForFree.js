import React from 'react';

export default class TimeTravelForFree extends React.Component {
    render() {
        return (
            <div>
                <h1>Immutability Gives You Time Travel For Free</h1>
                <p>(This is not how Redux works.)</p>
                <hr />
                <code>{'var stateHistory = [];'}</code>
                <code>{'var personState = { firstName: "Jeremiah", lastName: "Billmann" };'}</code>
                <br />
                <code>{`function getNewState(person) { 
    return Object.assign({}, person, { /* state changes */ };
}`}</code>
                <br />
                <code>{'var newPersonState = getNewState(personState);'}</code>
                <code>{'stateHistory.push(newPersonState);'}</code>
            </div>
        );
    }
};