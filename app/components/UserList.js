import React from 'react';
import PropTypes from 'prop-types';

export default class UserList extends React.Component {
    render() {
        return (
            <table className="table  table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};