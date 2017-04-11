//will be a form
import React from 'react';
import {Link} from 'react-router';

export default function NewCampus (props) {
  //methods passed down from container to handle form events
  //TODO: define these
  const handleNameChange = props.handleNameChange;
  const handleImageChange = props.handleImageChange;
  const handleSubmit = props.handleSubmit;
  const name = props.name;
  const image = props.image;
  const warning = props.warning;

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Campus</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  name="name"
                  placeholder="Campus Name"
                  type="text"
                  onChange={handleNameChange}
                  value={name}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Image</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  name="image"
                  placeholder="Campus Image url: http://lorempixel.com/500/500/city/5"
                  type="text"
                  onChange={handleImageChange}
                  value={image}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!!warning || !name}>Add Campus</button>
              </div>
            </div>
          </fieldset>
      </form>
    </div>
  );
}
//will be a form
