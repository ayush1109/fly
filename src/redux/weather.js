import * as ActionTypes from './ActionTypes';

export const Weather = (state = {
    isLoading: true,
    errMess: null,
    weather: {}
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_WEATHER:
            return { ...state, isLoading: false, errMess: null, weather: action.payload };

        case ActionTypes.LOADING_WEATHER:
            return { ...state, isLoading: true, errMess: null, weather: {} };

        case ActionTypes.FAILED_WEATHER:
            return{...state, isLoading: false, errMess: action.payload, weather: {} };

        default:
            return state;
    }
}