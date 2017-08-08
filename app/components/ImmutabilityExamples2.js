import React from 'react';

export default class ImmutabilityExamples2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Immutability Examples</h1>
                <hr />
                <code>{'var personState = { firstName: "Jeremiah", lastName: "Billmann" };'}</code>
                <br />
                <code>{'// Good'}</code>
                <code>{`function clearLastName(person) { 
    return { firstName: person.firstName, lastName: ""};
}`}</code>
                <br />
                <code>{'var newPersonState = clearLastName(personState);'}</code>
                <code>{'console.log(newPersonState === personState); // false :-)'}</code>
            </div>
        );
    }
};