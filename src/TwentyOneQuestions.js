import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import firebase from 'firebase';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';


const gameMessage = [
    "Name 5 States",
    "What is the 5th president of the United States?",
    "What are the 5 Boroughs?",
    "How many State in the USA",
    "What year was America found",
    "What is the name of a Squirrels home ?",
    "Blue, Pilot and Minke are all species of what ?",
    "From what animal do we get Cashmere ?",
    "How many arms does a Starfish usually have ?",
    "How many eyes does a bee have ?",
    "How many legs does a lobster use for walking ?",
    "How many planets in our Solar System have only one moon ?",
    "How many legs / tentacles does a squid have ?",
    "What is a Baby Oyster called ?",
    "What is a female alligator called?",
    "A scaup is what type of bird?",
    "How many toes does a cat have on each front paw?",
    "What is the head of a jellyfish called?",
    "An oribi is what type of animal?",
    "Dry ice is a frozen form of which gas?"
];

export default class TwentyOneQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            opponent: "",
            message: "",
            hidden: true
        };
    }

    // sayMessage() {
    //     this.setState({'message': 'hi!'});
    // }

    sayMessage() {
        this.setState({ 'message': gameMessage })
    }

    toggleHidden() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render() {
        const list = gameMessage.map((item) => {
            return <li key={item} onClick={() => console.log(item)}> {item} </li>
        });

        const txt = () => (
            <div>
                <TextField id="text-field-default" defaultValue="Question"/><br />
                <TextField id="text-field-default" defaultValue="Answer"/><br />
             </div>
        );

        return (<div>
            <center><h1>Welcome to 21 Questions!</h1></center>
            <div>
            
              <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Questions" value="a">
          <div>
            <ul>
                {list}
            </ul>
          </div>
        </Tab>
        <Tab label="Input your own Question" value="b">
          <div>
          <br />
            {txt()}
            <br/>
          </div>
        </Tab>
      </Tabs>
            </div>
          </div>);
    }
}
