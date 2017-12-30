import { combineReducers } from 'redux';
import menuDataReducer from './reducer_search_menu';
import menuCuisineDataReducer from './reducer_fetch_cuisine';

const rootReducer = combineReducers({	
	menuDataJSON : menuDataReducer,
	menuCuisineDataJSON:menuCuisineDataReducer

});

export default rootReducer;
