import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorList extends React.Component {
    render() {
        let errors = this.props.errors;
        if (!this.props.showErrors || !Object.keys(errors).length) return null;
        let errorElement =
            <div className="alert alert-danger" role="alert">
                <h4>Please correct the following:</h4>
                <ul>
                    {Object.keys(errors).map(errorKey =>
                        <li key={errorKey}>{errors[errorKey]}</li>
                    )}
                </ul>
            </div>

        return (
            <div>
                {errorElement}
            </div>
        );
    }
};

ErrorList.propTypes = {
    showErrors: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
}