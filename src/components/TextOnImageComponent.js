import React from 'react';
import {Button} from 'react-bootstrap';
function TextOnImage(props){
    return(
        <div className="container">
            <div id="image">
            <img src="https://i.pinimg.com/originals/38/d7/5b/38d75b985d9d08ce0959201f8198f405.jpg" height="600"></img>
            </div>
            <div id="text">
                <h2 id="h2">Our Rooms</h2>
                <div className="row">
                    <div className="col-md-9 m-1">
                <p id="imagePara" className="text-muted">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                </div>
                <p><Button variant="outline-dark">Book A Room</Button></p>
            </div>
            </div>
    );
}

export default TextOnImage;