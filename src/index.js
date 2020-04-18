import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import  {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
// import reducer from './reducers/reducer';
import reducerName from './reducers/reducerName';
import wishReducer from './reducers/wishName';
import reducerAddress from './reducers/reducerAddress';
import reducerSalary from './reducers/reducerSalary';
import reducerData from './reducers/reducerData';


const materReducer = combineReducers({
    name:reducerName,
    wish:wishReducer,
    Address:reducerAddress,
    Salary:reducerSalary,
    Data:reducerData,

})


const  store = createStore(materReducer,{name:"ram",wish:['eat','food','code'],Address:'mumbai',}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
