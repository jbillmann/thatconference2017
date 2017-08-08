import React from 'react';

export default class ArraySplice extends React.Component {
    render() {
        return (
            <div>
                <h1>Array.prototype.splice()</h1>
                <hr />
                <p><i>The splice() method changes the contents of an array by removing existing elements and/or adding new elements.</i></p>
                <code>{'var currentState = { people: [] };'}</code>
                <code>{'var newPeople = currentState.people.splice(0);'}</code>
                <code>{'newPeople.push({ firstName: "Jeremiah", lastName: "Billmann" });'}</code>
                <br />
                <code>{'var newState = Object.assign({}, currentState, { people: newPeople });'}</code>
                <br />
            </div>
        );
    }
};