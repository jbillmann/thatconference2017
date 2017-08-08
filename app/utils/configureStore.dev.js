import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../stores/reducers';
import { persistState } from 'redux-devtools';
import DevTools from '../containers/DevTools';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

export default function configureStore(initialState) {
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancer = compose(
        applyMiddleware(thunk),
        DevTools.instrument(),
        persistState(getDebugSessionKey())
    );

    const store = createStore(combineReducers(reducers), initialState, enhancer);

    if(module.hot) {
        module.hot.accept('../stores/reducers', () => {
            store.replaceReducer(combineReducers(reducers));
        })
    }

    return store;
};