import React from 'react';

export default class PuttingItAllTogether extends React.Component {
    render() {
        return (
            <div>
                <h1>Putting It All Together</h1>
                <hr />
                <p>Redux Reducers</p>
                <code>{`
var initialState = {
    firstName: "Jeremiah",
    lastName: "Billmann"
};

function myReducer(state = initialState, action) => {
    switch (action.type) {
        case types.CLEAR_FIRST_NAME:
            return Object.assign({}, state, { firstName: "" });

        case types.CLEAR_LAST_NAME:
            return Object.assign({}, state, { lastName: "" });
    }
}`}</code>
            </div>
        );
    }
};