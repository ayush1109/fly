import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Show from './ShowComponent';
import { connect } from 'react-redux';

import { fetchWeather } from '../redux/ActionCreator';

const mapStateToProps = state => ({
    weather: state.weather
})

const mapDispatchToProps = dispatch => ({
    fetchWeather: (city, days) => {dispatch(fetchWeather(city, days))}
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {
        return (
            <div>
                <Header />
                <Home fetchWeather={this.props.fetchWeather}/>
                <Show weather={this.props.weather}
                    isLoading={this.props.weather.isLoading}
                    errMess={this.props.weather.errMess}
                    />
            </div>
        );
    }
}

export default connect( mapStateToProps ,mapDispatchToProps)(Main);