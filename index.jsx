require('./src/App.scss');

import React from 'react';
import {render} from 'react-dom';
import App from './src/App.jsx';

render(
    <div>
        <App/>
    </div>
    , document.getElementById('app'));