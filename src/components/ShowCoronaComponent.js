import { Loading } from './LoadingComponent';
import React from 'react';

function RenderCorona({corona}) {
    return (
        <div className="row">
            <h4>Corona Updates</h4>
            <ul className="list-unstyled">
            {corona.corona.data.map(cor => {
                return (
                <li key={cor.id}>
                    <p>Confirmed Cases: {cor.confirmed}</p>
                    <p>Deaths: {cor.deaths}</p>
                </li>
                );
            })}
            </ul>
        </div>
    );
}


const ShowCorona = (props) => {
    if (props.isLoading)
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );

    else if (props.errMess)
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );

    else
        return (
            <div className="container">
                <RenderCorona corona={props.corona} />
            </div>
        );
}

export default ShowCorona;
