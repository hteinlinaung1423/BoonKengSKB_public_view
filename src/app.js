import 'normalize.css/normalize.css'
import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';


const jsx = (
    <AppRouter />
)

ReactDOM.render(jsx, document.getElementById('root'));

// <Route path="/individual" component={Individual}/>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();