import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
function Header(props) {
        return (
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-60>">
                                <h1>React App</h1>
                                <p>We make the best react app in the world.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
        );
    }

export default Header;