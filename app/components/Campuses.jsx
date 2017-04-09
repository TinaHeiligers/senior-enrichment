import React from 'react';
import { Link } from 'react-router';

export default function Campuses (props) {

	const campuses = props.campuses;

	return (
        <div>
        	<h3>Campuses</h3>
        	<div className="row">
        		{campuses && campuses.map(campus => (
                    <div className="col-xs-4" key={ campus.id }>
                    <Link className="thumbnail" to={`/campuses/${campus.id}`}>
	                    <img className="img-circle" src={ campus.image }/>
	                    <div className="caption">
		                    <h5>
		                    <span>{ campus.name }</span>
		                    </h5>
	                    </div>
                    </Link>
                    </div>
                    ))
	        	}
        	</div>
        </div>
    );
};
