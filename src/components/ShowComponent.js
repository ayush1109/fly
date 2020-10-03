import { Loading } from './LoadingComponent';
import React from 'react';

function RenderWeather({weather}) {
    
    return (
        <div>
        <h4>Report</h4>
        <p>Name : {weather.weather.location.name}</p>
        <p>Region : {weather.weather.location.region}</p>
        <p>Country : {weather.weather.location.country}</p>
        <p>Temperature : {weather.weather.current.temp_c} degree celsius</p>
        <p>Image : <img src={weather.weather.current.condition.icon}></img></p>
        </div>
    );
}


const Show = (props) => {
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
                <RenderWeather weather={props.weather} />
            </div>
        );
}

export default Show;