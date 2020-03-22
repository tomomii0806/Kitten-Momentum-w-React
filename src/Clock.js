import React, { Component } from 'react';

//let time = new Date().toLocaleString();

class Clock extends Component {
    constructor(prop){
        super(prop);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    render() {
        return (
            <p className="clock">
                The time is {this.state.time}
            </p>
        );
    }
}
export default Clock;
