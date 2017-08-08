import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import SlideMain from './containers/SlideMain';
import configureStore from './utils/configureStore';
import 'bootstrap';
import './site.scss';

const store = configureStore(window.initialReduxState);

const render = (Component, reduxStore) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={reduxStore}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );
};

render(SlideMain, store);

if (module.hot) {
    // module.hot.accept();
    module.hot.accept('./containers/SlideMain', () => {
        render(SlideMain, store)
    });
}