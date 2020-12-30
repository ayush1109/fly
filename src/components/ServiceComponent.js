import React from 'react';
import {Briefcase, BookOpen, Watch, Wifi, Shield, Disc} from 'react-feather';
function Service(props){
    return (
        <div className="container">
            <h3 id="services">OUR SERVICES</h3>
                <div className="row" id="row1">
                    <div className="col-12 col-md-3 m-1">
                        <Briefcase />
                        <p>Breakfast</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <BookOpen />
                        <p>Garden</p>                        
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <Watch />
                        <p>Pool</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
                <div className="row" id="row2">
                    <div className="col-12 col-md-3 m-1">
                        <Wifi />
                        <p>Free WiFi</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <Shield />
                        <p>Daily HouseKeeping</p>                        
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <Disc />
                        <p>In-Room Dining Service</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
        </div>
    );
}

export default Service;