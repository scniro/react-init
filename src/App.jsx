import React from 'react';
import MyInput from './components/MyInput/MyInput.jsx';
require('./App.scss');

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id='container'>
                <h1>{this.props.title}</h1>
                <MyInput/>
            </div>
        );
    }
}