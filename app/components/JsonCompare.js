import React from 'react';

export default class JsonCompare extends React.Component {
    render() {
        return (
            <div>
                <h1>JSON Compare</h1>
                <hr />
                <code>// Limited</code>
                <code>{'var object1 = {a: 1, b: 2};'}</code>
                <code>{'var object2 = {b: 2, a: 1};'}</code>
                <br />
                <code>JSON.stringify(object1) === JSON.stringify(object2) // false </code>
            </div>
        );
    }
};