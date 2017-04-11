//will be a form
import React from 'react';
import {Link} from 'react-router';

export default function NewStudent (props) {
  //methods passed down from container to handle form events
  //TODO: define these
  const handleFirstNameChange = props.handleFirstNameChange;
  const handleLastNameChange = props.handleLastNameChange;
  const handleEmailChange = props.handleEmailChange;
  const handleSubmit = props.handleSubmit;
  const firstName = props.firstName;
  const lastName = props.lastName;
  const email = props.email;
  const warning = props.warning;

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Student</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
            <div className="form-group">
              <label className="col-xs-2 control-label">First Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  onChange={handleFirstNameChange}
                  value={firstName}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Last Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  onChange={handleLastNameChange}
                  value={lastName}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Email</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="e.g. email@address.com"
                  type="text"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!!warning || !firstName && !lastName}>Add Student</button>

              </div>
            </div>
          </fieldset>
      </form>
    </div>
  );
}

