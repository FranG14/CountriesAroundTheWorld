const initialState = {
    countryDetails: {},
    countries: [],
    foundCountry: []
}

function rootReducer(state = initialState, action) {
    if (action.type === "GET_COUNTRIES") {
        return {
            ...state,
            countries: action.payload
        }
    }
    if (action.type === "SEARCH_COUNTRY") {
        return {
            ...state,
            foundCountry: action.payload
        }
    }
    return state;
}

export default rootReducer;