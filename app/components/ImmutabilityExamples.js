import React from 'react';

export default class ImmutabilityExamples extends React.Component {
    render() {
        return (
            <div>
                <h1>Immutability Examples</h1>
                <hr />
                <code>{'var personState = { firstName: "Jeremiah", lastName: "Billmann" };'}</code>
                <br />
                <code>{'// Bad... Impure'}</code>
      <code>{`function clearLastName(person) {
    person.lastName = "";
    return person;
}`}</code>
                <br />
                <code>{'var newPersonState = clearLastName(personState);'}</code>
                <code>{'console.log(newPersonState === personState); // true ;-('}</code>
            </div>
        );
    }
};