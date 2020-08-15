import {combineReducers} from 'redux';
import  countriesReducer  from './countriesReducers';

const rootReducer = combineReducers({
    countries: usersReducer,
})

export default rootReducer;