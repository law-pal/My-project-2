import {combineReducers} from 'redux';
import  countriesReducer  from './countriesReducers';

const rootReducer = combineReducers({
    countries: countriesReducer,
})

export default rootReducer;