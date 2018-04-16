import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import firebase from 'firebase';

const gameMessage = [
    "Name 5 States",
    "What is the 5th president of the United States?",
    "What are the 5 Boroughs?",
    "qqqawaerertruyup"
];

export default class TwentyOneQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            opponent: "",
            message: ""
        };
    }
    
    sayMessage() {
        this.setState({'message': 'hi!'});
    }
    
    render() {
        return (<div>
            <h1>Welcome World!</h1>
            <div>
              <RaisedButton label="Hello" onClick = {() => this.sayMessage()}/>
              <div>{this.state.message}</div>
            </div>
          </div>);
    }
}
