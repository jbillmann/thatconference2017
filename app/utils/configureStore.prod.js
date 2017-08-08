import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../stores/reducers';

export default function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(thunk)
    );

    const store = createStore(combineReducers(reducers), initialState, enhancer);

    if(module.hot) {
        module.hot.accept('../stores/reducers', () => {
            store.replaceReducer(combineReducers(reducers));
        })
    }

    return store;
};