import { GET_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from "./actions";

//Creating my actions using action creator

export const getCountries = () => ({
    type: GET_COUNTRIES,
})

export const getCountriesSuccess = (countries) => ({
    type: GET_COUNTRIES_SUCCESS,
    payload: countries,
})

export const getCountriesFailure = () => ({
    type: GET_COUNTRIES_FAILURE,
})

//Combining all action in an asynchronous thunk

export function fetchCountries() {
    return async (dispatch) => {
        dispatch(getCountries())
        try {
            const response = await fetch('https://restcountries.eu/rest/v2/all')
            const data = await response.json()
            dispatch(getCountriesSuccess(data))
        } catch (error) {
            dispatch(getCountriesFailure())
        }
    }
}