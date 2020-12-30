import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Facebook, Instagram, Twitter} from 'react-feather';
function About(props){
    return (
        <div className="container" id="about-con">
            <h2 id="about">ABOUT</h2>
            <div className="row" id="about-row">
                <div className="col-md-5 m-3">
            <p id="about-para" className="text-muted">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        </div>
        <div class="vertical-menu">
            <a href="#" class="active"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Instagram /></a>
            </div>
        </div>
    );
}

export default About;