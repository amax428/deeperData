import React from 'react';
import ReactDOM from 'react-dom';
import './shared/style/main.css';
import Root from './shared/js/root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
