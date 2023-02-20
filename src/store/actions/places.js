
export const SET_PLACES = 'SET_PLACES';
export const CLEAR_PLACES = 'CLEAR_PLACES';




export const setPlaces = places => ({
    type: SET_PLACES,
    places
});

export const clearPlaces = () => ({
    type: CLEAR_PLACES
});
