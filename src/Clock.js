import React, { Component } from 'react';
import './Contacts.css';

//let time = new Date().toLocaleString();

class Clock extends Component {
    constructor(prop){
        super(prop);
        this.state = {
            time: new Date(),
            say: "Meow "
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }

      
      tick() {
        this.setState({
          time: new Date()
        });
        
      }
    render() {
        const period = this.state.time.getHours();
        let call;
        if (period < 12) {
            call = <h2>good morning</h2>;
          } else if (period < 18) {
            call = <h2>good afternoon</h2>;
          } else {
            call = <h2>good evening</h2>;
          }
        
        const h = this.state.time.getHours();
        const m = this.state.time.getMinutes();
        let tm;
        if (m < 10) {
        tm = <p id="time">{h}:0{m}</p>;
        }
        else{
            tm = <p id="time">{h}:{m}</p>;
        }
        return (
            <div className="clock">
                    
                        {tm}
                       
                    <p id="call">{call}</p>
                    <div id="btn">
                        <button id="refresh" onClick={() => window.location.reload(false)}>New Meow</button>      
                    </div>
            </div>
                    
        );
    }
}

export default Clock;
