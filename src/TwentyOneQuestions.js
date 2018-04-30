import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import firebase from 'firebase';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const gameMessage = [[
        "Which ocean lies on the east coast of the United States?",
        "Atlantic Ocean"
    ],[
        "What is the 5th president of the United States?",
        "Donald Trump"
    ],[
        "What are the 5 Boroughs?",
        "Brooklyn, Queens, Staten Island, Manhatten"
    ],[
        "How many State in the USA?",
        "50"
    ],[
        "What year was America found?",
        "1600"
    ],[
        "What is the worlds largest mountain?",
        "Mount Everest"
    ],[
        "How many great lakes are there?",
        "5"
    ],[
        "What is the longest River in the US?",
        "Missouri River"
    ],[
        "The biggest desert in the world is...",
        "Sahara"
    ],[
        "How many Kindoms is the United Kindom comprised of?",
        "4"
    ],[
        "Dry Ice is a Frozen form of which gas?",
        "Carbon Dioxide"
    ],[
        "What is the longest river in the world?",
        "Nile River"
    ],[
        "What is the largest body of water?",
        "Pacific Ocean"
    ],[
        "What is the most popular country?",
        "China"
    ],[
        "What is the capital of IceLand?",
        "Reykjavik"
    ],[
        "What continent is the largest in terms of land?",
        "Asia"
    ],[
        "What is the largest mountain range in the world?",
        "Andes"
    ],[
        "What is the smallest country in the world?",
        "Vatican City"
    ],[
        "What is the river that runs through Paris, France is called?",
        "The Seine"
    ],[
        "What is the most common speaking language in the world?",
        "English"
    ]];

export default class TwentyOneQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            opponent: "",
            message: "",
            hidden: true,
            open: false
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
    
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
     };

    
    check(checks){
        if(checks === gameMessage[1]){
            alert("Correct");
        } else {
            alert("Incorrect");
        }
    }

    render() {
        const list = gameMessage.map((item) => {
            return <li className = "question" key={item} onClick={() => this.handleOpen()}> {item[0]} </li>
        });

        const actions = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
              />,
              <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
              />,
        ];


        const inpt = () => (
            <Dialog title="Answer Question" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                <TextField id="text-field-default" placeholder="Answer"/>
            </Dialog>
        );

        const txt = () => (
            <div>
                <TextField id="text-field-default" placeholder="Question"/><br />
                <TextField id="text-field-default" placeholder="Answer"/><br />
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
            <ol>
                {list}
            </ol>
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
      
      {inpt()}
            </div>
          </div>);
    }
}
