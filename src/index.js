/**************************************************************************************************************
License:
MIT License

Copyright (c) [2022] [cdcentral]

***************************************************************************************************************

From source code author: Chris Duran

This project and its source code is free for anyone to use and modify.  Please retain this header and the following links.

This source code can be found in the following youtube video https://youtu.be/7TYL6BPZVmw
The main channel is https://www.youtube.com/@CDCentral
Donations are appreciated at https://paypal.me/AncoCentral?country.x=US&locale.x=en_US
**************************************************************************************************************/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainApp from './MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<MainApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
