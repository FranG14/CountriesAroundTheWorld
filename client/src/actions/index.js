import axios from "axios"

export function getCountries() {
    return function (dispatch) {
        return axios.get("http://localhost:3001/countries/all")
            .then(response => {
                console.log(response.data)
                dispatch({ type: "GET_COUNTRIES", payload: response.data })
            })
        }
}

export function searchCountry(id) {
    return function (dispatch) {
        return axios.get("http://localhost:3001/countries/"+id)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "SEARCH_COUNTRY", payload: response.data })
            })
        }
}