import React from "react";
import "../styles/Time.css";
import timer from '../utilities/timer';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            total: 0,
            timer: 0,
            minutes: 2,
            repeat: 1,
            myAlert: false
        };

        this.startTimer = this.startTimer.bind(this);
        this.addRepeat = this.addRepeat.bind(this);
    }
    
    componentDidMount() {
        
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTimer () {
        this.interval = setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });
            this.setState({ total: this.state.total + 1 });

            // if (this.state.minutes * 60 > 0) {
                if (this.state.timer === this.state.minutes * 60) {
                    this.setState({ 
                        timer: 0,
                        // minutes: this.state.minutes - 1,
                        repeat: this.state.repeat - 1,
                        myAlert: false
                    });
                    console.log(this.state.total);

                    if (this.state.repeat <= 0) {
                        clearInterval(this.interval);
                        this.setState({ 
                            myAlert: true
                        });
                    }
                } 
            // }
        }, 100);
    }

    addRepeat() {
        this.setState({
            repeat: 2
        });
        this.startTimer();
    }
    
    render() {
        return (
            <div>
                <p>The timer will repeat {this.state.repeat} more { this.state.repeat === 1 ? 'time' : 'times' }</p>
                <h1>
                    {Math.floor(this.state.timer / 60) < 10 ? '0' : ''}{Math.floor(this.state.timer / 60)}:{this.state.timer % 60 < 10 ? '0' : ''}{this.state.timer % 60}
                </h1>
                <p>
                    {Math.floor(this.state.total / 60) < 10 ? '0' : ''}{Math.floor(this.state.total / 60)}:{this.state.total % 60 < 10 ? '0' : ''}{this.state.total % 60}
                </p>
                <button onClick={this.addRepeat}>Repeat 2X</button>
                {this.state.myAlert ? <p>Timer Done</p> : ''}
            </div>
        )
    }

}

export default Time;