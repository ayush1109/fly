import React from 'react';

function Things(props){
    return (
        <div className="container" id="things-con">
            <h3 id="things">THINGS TO DO</h3>
                <div className="row" id="row1">
                    <div className="col-12 col-md-3 m-1">
                        <p>Wineres Tour</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <p>Cultural Sites</p>                        
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <p>Market Tour</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
                <div className="row" id="row2">
                    <div className="col-12 col-md-3 m-1">
                        <p>Leisure Activities</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <p>Birds Safari</p>                        
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                    <div className="col-12 col-md-3 m-1">
                        <p>Horse Riding</p>
                        <p className="text-muted">I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
        </div>
    );
}

export default Things;