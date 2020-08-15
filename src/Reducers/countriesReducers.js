export const initialState = {
    countries: [],
    loading: false,
    hasErrors: false
}


export default function countriesReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                loading: true
            }
            case GET_COUNTRIES_SUCCESS:
                console.log(action.payload)
                return{
                    countries: action.payload,
                    loading: false,
                    hasErrors: false
                }

            case GET_COUNTRIES_FAILURE:
                return{...state, loading: false, hasErrors: true}
        default:
            return state
    }


}

