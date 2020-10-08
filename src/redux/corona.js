import * as ActionTypes from './ActionTypes';

export const Corona = (state = {
    isLoading: true,
    errMess: null,
    corona: {}
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CORONA:
            return { ...state, isLoading: false, errMess: null, corona: action.payload };

        case ActionTypes.LOADING_CORONA:
            return { ...state, isLoading: true, errMess: null, corona: {} };

        case ActionTypes.FAILED_CORONA:
            return { ...state, isLoading: false, errMess: action.payload, corona: {} };

        default:
            return state;
    }
}