import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'jquery/dist/jquery'
//import $ from 'jquery'
//import Propper from 'propper'
//import 'bootstrap/dist/js/bootstrap'
//import App from './1maxburger/App';
//import Navigation  from './1annuburger/start'
//import Startfirst from './1annuburger/startfirst'
//import Order from './1annuburger/order'
//import Annuapp from './annuapp'
//import Anufirst from './anufirst'
//import App from './Seventh/App' 
//import App from './myGovernment/App'
import * as serviceWorker from './serviceWorker'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//import Seven from './Seventh/seven'
//import Reducer from './Seventh/Redux1'
//import State1 from './basics/state' 
import CombinedReducer from './Project/Redux/combine'
//import Reducer from './Project/Redux/reducer'
import App from './Project/App'
 let store=createStore(CombinedReducer);
//import About from './fortpolio/Components/Skills/skills'
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root'));










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
