import React from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import UserList from './UserList';
import ErrorList from './ErrorList';

export default class TimeTravelExample extends React.Component {
    render() {
        return (
            <div>
                <h1>Redux Developer Tools</h1>
                <hr />
                <ErrorList errors={this.props.errors} showErrors={this.props.showErrors} />
                <UserForm
                     user={this.props.user}
                     onChange={this.props.onChange}
                     onSave={this.props.onSave}
                     isLoading={this.props.isLoading}
                     showErrors={this.props.showErrors}
                     errors={this.props.errors}
                />
                <UserList users={this.props.users} />
            </div>
        );
    }
};

TimeTravelExample.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    showErrors: PropTypes.bool.isRequired
};