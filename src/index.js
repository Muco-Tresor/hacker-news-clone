import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="Muco Tresor"/>, document.getElementById('root'));
if(module.hot) {
    module.hot.accept();
}
registerServiceWorker();
