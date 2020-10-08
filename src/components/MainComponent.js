import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Weather from './WeatherComponent';
import Corona from './CoronaComponent';
import ShowWeather from './ShowWeatherComponent';
import ShowCorona from './ShowCoronaComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchWeather, fetchCorona } from '../redux/ActionCreator';

const mapStateToProps = state => ({
    weather: state.weather,
    corona: state.corona
})

const mapDispatchToProps = dispatch => ({
    fetchWeather: (city, days) => {dispatch(fetchWeather(city, days))},
    fetchCorona: (type) => {dispatch(fetchCorona(type))}
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchWeather();
        this.props.fetchCorona();
    }

    render() {
        const weather = () => {
            return (
            <Weather 
                    fetchWeather={this.props.fetchWeather}
                    />
            );
        }

        const corona = () => {
            return (
                <Corona 
                    fetchCorona={this.props.fetchCorona}
                    />
            );
        }

        const homePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={homePage}></Route>
                    <Route path="/weather" component={weather}></Route>
                    <Route path="/corona" component={corona}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <ShowWeather weather={this.props.weather}
                    isLoading={this.props.weather.isLoading}
                    errMess={this.props.weather.errMess}
                    ></ShowWeather>
                <ShowCorona corona={this.props.corona}
                    isLoading={this.props.corona.isLoading}
                    errMess={this.props.corona.errMess}
                    ></ShowCorona>
                
            </div>
        );
    }
}

export default withRouter(connect( mapStateToProps ,mapDispatchToProps)(Main));