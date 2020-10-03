import * as ActionTypes from "./ActionTypes";
import { baseUrl, addUrl } from "../shared/baseUrl";


export const fetchWeather = (city = 'Delhi', days = Number('1')) => (dispatch) => {
    dispatch(weatherLoading(true));

    return fetch(baseUrl + city + addUrl + Number(days))
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