import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.onunload = () => {
	console.log("hit");
}

ReactDOM.render(<App />, document.getElementById('root'));

