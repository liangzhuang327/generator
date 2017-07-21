import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
//导入reducer和container
import reducer from "../redux/reducer";
import * as Pages from "../src";

 // var store = createStore(reducer,applyMiddleware(thunk));
var store = applyMiddleware(thunk)(createStore)(reducer)
//这是第二种方式创建store，applyMiddleware(thunk)的返回值是一个函数，这个函数可以以createStore为参数创建一个经过middleware增强的store
//然后在传入reducer

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Pages.Home}/>
                <Route path="/test" component={Pages.Test}/>
            </div>
        </BrowserRouter>
    </Provider>
,document.getElementById("root"))