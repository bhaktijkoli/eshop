
require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render( <BrowserRouter><Provider store={store}><Layout /></Provider></BrowserRouter>, document.getElementById('app'));
