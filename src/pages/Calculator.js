import React, { Component } from "react";
import KeyPad from '../components/KeyPad';
import Result from '../components/Result';

export default class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.deleteAll()
        }
        else if(button === "CE"){
            this.delete()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };
    delete = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    deleteAll = () => {
        this.setState({
            result: ""
        })
    };
    render() {
        return (
            <div className="component">
                <div className="calculator-main">
                    <h1>Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}