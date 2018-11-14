import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style/styles';

var int;
var hour = 0, minute = 0, second = 0;//时 分 秒
var millisecond = 0;//毫秒
class Timer extends Component {
    constructor(props) {
        super(props);
        // self = this;
        this.state = {
            hours: "00",
            mins: "00",
            seconds: "00",
        };
    }

    Reset()//重置
    {
        window.clearInterval(int);
        millisecond = hour = minute = second = 0;
    }

    start() {
        int = setInterval(() => {
            millisecond = millisecond + 50;
            if (millisecond >= 1000) {
                millisecond = 0;
                second = second + 1;
            }
            if (second >= 60) {
                second = 0;
                minute = minute + 1;
            }

            if (minute >= 60) {
                minute = 0;
                hour = hour + 1;
            }
            this.setState({
                hours: hour < 10 ? "0" + hour : hour,
                mins: minute < 10 ? "0" + minute : minute,
                seconds: second < 10 ? "0" + second : second
            })
        }, 50);
    }

    stop() {
        clearInterval(int);
    }


    render() {
        return (
            <Text style={[styles.font_white, { fontSize: 16 }]}> {this.state.hours}:{this.state.mins}:{this.state.seconds} </Text>
        );
    }
}

export default Timer;
