import * as ActionTypes from "./ActionTypes";
import { baseUrlWeather, addUrlWeather } from "../shared/baseUrlWeather";
import { baseUrlCorona } from '../shared/baseUrlCorona';


export const fetchWeather = (city = 'Delhi', days = Number('1')) => (dispatch) => {
    dispatch(weatherLoading(true));

    return fetch(baseUrlWeather + city + addUrlWeather + Number(days))
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(weather => dispatch(addWeather(weather)))
            .catch(error => dispatch(weatherFailed(error.message)));
}

export const weatherLoading = () => ({
    type: ActionTypes.LOADING_WEATHER
});

export const addWeather = (weather) => ({
    type: ActionTypes.ADD_WEATHER,
    payload: weather
});

export const weatherFailed = (errMess) => ({
    type: ActionTypes.FAILED_WEATHER,
    payload: errMess
})

export const coronaLoading = () => ({
    type: ActionTypes.LOADING_CORONA
});

export const addCorona = (corona) => ({
    type: ActionTypes.ADD_CORONA,
    payload: corona
});

export const coronaFailed = (errMess) => ({
    type: ActionTypes.FAILED_CORONA,
    payload: errMess
})

export const fetchCorona = (type = 'GetUKTotalCounts') => (dispatch) => {
    dispatch(coronaLoading(true));

    return fetch(baseUrlCorona + type, {
        method: "GET",
	headers: {
		"x-rapidapi-host": "covid-19-uk-data-by-zt.p.rapidapi.com",
		"x-rapidapi-key": "a49246b1c8msh61f3e13febd7c76p1cde1fjsnbb5c2fa818e3"
    }})
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(corona => dispatch(addCorona(corona)))
            .catch(error => dispatch(coronaFailed(error.message)));
}

