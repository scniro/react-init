import React from 'react';
require('./MyInput.scss');

export default class MyInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onChange(e) {

        this.setState({value: e.target.value});
    }

    render() {

        return (
            <div>
                <input value={this.state.value} onChange={this.onChange.bind(this)} />
            </div>
        );
    }
}