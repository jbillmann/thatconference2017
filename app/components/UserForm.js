import React from 'react';
import PropTypes from 'prop-types';

export default class UserForm extends React.Component {
    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className={this.props.showErrors && this.props.errors.firstName ? "has-error" : ""}>
                            <label htmlFor="firstName" className="col-sm-2 control-label">First Name:</label>
                            <div className="col-sm-10">
                                <input id="firstName" name="firstName" type="text" className="form-control" onChange={(e) => { this.props.onChange(e, 'firstName'); }} value={this.props.user.firstName} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className={this.props.showErrors && this.props.errors.lastName ? "has-error" : ""}>
                            <label htmlFor="lastName" className="col-sm-2 control-label">Last Name:</label>
                            <div className="col-sm-10">
                                <input id="lastName" name="lastName" type="text" className="form-control" onChange={(e) => { this.props.onChange(e, 'lastName'); }} value={this.props.user.lastName} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-primary pull-right" onClick={this.props.onSave} disabled={this.props.isLoading ? true : false}>{this.props.isLoading ? "Processing..." : "Save"}</button>
                    <br />
                    <br />
                </form>
            </div>
        );
    }
};

UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    showErrors: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
};