import { Loading } from './LoadingComponent';
import React from 'react';

function RenderWeather({ weather }) {

    const forecastDayWise = weather.weather.forecast.forecastday.map((eachday) => {
        return (
            <div key={eachday.date_epoch}>
                <h4>Date: {eachday.date}</h4>
                <p>Maximum Temperature: {eachday.day.maxtemp_c}</p>
                <p>Minimum Temperature: {eachday.day.mintemp_c}</p>
                <h6>Hour Wise: {eachday.hour.map((h) => {
                    return (
                        <div key={h.id}>
                            <p>Time : {h.time.substr(12, 16)}</p>
                            <p>Temperature : {h.temp_c}</p>
                        </div>
                    );
                })}</h6>
            </div>
        );
    })

    return (
        <div className="row">
            <div className="col-12 col-md-9">
                <h2>Report</h2>
                <p>Name : {weather.weather.location.name}</p>
                <p>Region : {weather.weather.location.region}</p>
                <p>Country : {weather.weather.location.country}</p>
                <p>Temperature : {weather.weather.current.temp_c} degree celsius</p>
                <p>Image : <img src={weather.weather.current.condition.icon}></img></p>
                <h3>Daily Prediction Report</h3>

            </div>
            <div className="col-12 col-md-9 text-justify">

            {forecastDayWise}
            </div>
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