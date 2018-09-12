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

    addMinutes(min) {
        this.setState({
            minutes: min
        });
    }

    addRepeat(num) {
        this.setState({
            repeat: num
        });
    }
    
    render() {
        return (
            <div>
                <p>The timer will repeat {this.state.repeat} more { this.state.repeat === 1 ? 'time' : 'times' }</p>
                <h1>
                    {Math.floor(this.state.timer / 60) < 10 ? '0' : ''}{Math.floor(this.state.timer / 60)}:{this.state.timer % 60 < 10 ? '0' : ''}{this.state.timer % 60}
                </h1>

                <div>
                    <h3>Total minutes</h3>
                    <p>
                        {Math.floor(this.state.total / 60) < 10 ? '0' : ''}{Math.floor(this.state.total / 60)}:{this.state.total % 60 < 10 ? '0' : ''}{this.state.total % 60}
                    </p>
                </div>

                <div>
                    <h3>How many minutes per interval?</h3>
                    <button onClick={() => this.addMinutes(1)}>1 Minute</button>
                    <button onClick={() => this.addMinutes(5)}>5 Minutes</button>
                    <button onClick={() => this.addMinutes(10)}>10 Minutes</button>
                    <button onClick={() => this.addMinutes(15)}>15 Minutes</button>
                    <button onClick={() => this.addMinutes(30)}>30 Minutes</button>
                </div>

                <div>
                    <h3>How many times to repeat?</h3>
                    <button onClick={() => this.addRepeat(1)}>Repeat 1X</button>
                    <button onClick={() => this.addRepeat(2)}>Repeat 2X</button>
                    <button onClick={() => this.addRepeat(3)}>Repeat 3X</button>
                    <button onClick={() => this.addRepeat(5)}>Repeat 5X</button>
                    <button onClick={() => this.addRepeat(10)}>Repeat 10X</button>
                </div>

                <div>
                    <br></br><button onClick={this.startTimer}>Start</button>
                </div>
                
                {this.state.myAlert ? <p>Timer Done</p> : ''}
            </div>
        )
    }

}

export default Time;