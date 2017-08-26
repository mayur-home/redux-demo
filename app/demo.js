import {combineReducers, createStore} from 'redux';

const userReducer = (store = {}, action) => {
	return store;
}

const tweetsReducer = (store = [], action) => {
	return store;
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
	console.log("Store Changed:", store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});
