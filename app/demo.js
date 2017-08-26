import {createStore} from 'redux';

const reducer = (store, action) => {
	if (action.type === 'INC') {
		store++;
	} else if (action.type === 'DEC') {
		store--;
	}

	return store;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("Store Changed:", store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});
