// styling
import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

//Provider is a react component that knows how to read changes from our react store
//lets child components (App in our case) know some new state is available and updates all components with new state
import { Provider } from 'react-redux'
// createStore should work fine for the scope of this project
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';
import {thunk} from 'redux-thunk';
// store - for managing state
const store = createStore(reducers, {}, applyMiddleware(thunk));

// DOM
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

//console.log('Stripe key = ', process.env.REACT_APP_STRIPE_KEY);
//console.log('Environment = ', process.env.NODE_ENV );