//will be a form
import React from 'react';
import {Link} from 'react-router';

export default function NewCampus (props) {
  //methods passed down from container to handle form events
  //TODO: define these
  const handleNameChange = props.handleNameChange;
  const handleImageChange = props.handleImageChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Campus</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  onChange={handleNameChange}
                  value={inputValue}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Image</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  name="image"
                  type="text"
                  onChange={handleImageChange}
                  value={inputValue}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Add Campus</button>
              </div>
            </div>
          </fieldset>
      </form>
    </div>
  );
}
//will be a form
