import React from 'react';
import MyInput from './components/MyInput/MyInput.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id='container'>
                <h1>hello react</h1>
                <MyInput/>
            </div>
        );
    }
}