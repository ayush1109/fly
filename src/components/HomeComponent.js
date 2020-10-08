import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                    <h2>Check Our Whether Service</h2>
                </div>
                <div className="col-12 col-md-3">
                <Link to="/weather"><Button type="button" className="btn btn-primary">Go</Button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <h2>Check Our Corona Service</h2>
                </div>
                <div className="col-12 col-md-3">
                <Link to="/corona"><Button type="button" className="btn btn-primary">Go</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;