import React from "react";
import "../styles/Time.css";
import timer from '../utilities/timer';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            timer: 0,
            minutes: 2,
            repeat: 1,
            myAlert: false
        };
    }
    
    componentDidMount() {
        
        this.interval = setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });

            if (this.state.timer === 60) {
                this.setState({ 
                    timer: 0, 
                    minutes: this.state.minutes - 1,
                    repeat: this.state.repeat -1,
                    myAlert: false
                });
                if (this.state.repeat <= 0) {
                    clearInterval(this.interval);
                    this.setState({ 
                        myAlert: true
                    });
                }
            }
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div>
                <p>The timer will repeat {this.state.repeat} more { this.state.repeat === 1 ? 'time' : 'times' }</p>
                <h1>{this.state.timer}</h1>
                {this.state.myAlert ? <p>'Timer Done'</p> : ''}
            </div>
        )
    }

}

export default Time;