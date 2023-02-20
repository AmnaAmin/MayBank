import { combineReducers } from 'redux';
import {
    SET_PLACES,
    CLEAR_PLACES
} from '../actions/places';

const initialState = {
    places: [{
        'id' : 1,
        'location' : {
            lat: 37.80342621724532,
            lng:  -122.2692062483123
            }
        },
        {
        'id' : 2,
        'location' : {
            lat: 37.80464636631737	,
            lng: -122.2679147090554
            }
        },
        {
        'id' : 3,
        'location' : {
            lat: 37.678313602783604, 
            lng: -121.01454292914511
            }
        }]
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLACES:
            return {
                ...state,
                places: action.places
            };
        case CLEAR_PLACES:
            return {
                ...state,
                places: []
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    places: placesReducer
});

export default rootReducer;
