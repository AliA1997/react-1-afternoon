import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        //Set the the initial state.
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        };
    }
    //Change the state of the number elements in the handleChange method.
    handleChange(whatField, val) {
        //Set the state of the num to num, whenever a field is effected.
        this.setState(() => {
            return {
                sum: null,
            }
        })
        //Make sure the value in the input field is a number!!
        if(!Number(val)) {
            val = 0;
        }
        //Determine the state of each property based on the whatField parameter.
        if(whatField === 'number1') {
            this.setState(() => {
                return {
                    number1: Number(val),
                };
            });
        } else if (whatField === 'number2'){
            this.setState(() => {
                return {
                    number2: Number(val),
                };
            });
        } 
    }

    //Add the number  elements together in the handleClick method
    handleClick() {
        //Set the state by adding it's previous state of 2 numbers together.
        this.setState(() => {
            return {
                sum: this.state.number1 + this.state.number2,
            };
        });
    }
    clearFields() {
        this.setState(() => {
            return {
                number1: 0,
                number2: 0,
                sum: null,
            };
        });
    }
    //One parent div element, one h4 element, two input elements, one button element, and one span element.
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(e) => {
                    this.handleChange('number1', e.target.value)
                }} value={this.state.number1}/>
                <input className='inputLine' onChange={(e) => {
                    this.handleChange('number2', e.target.value)
                    }} value={this.state.number2}/>
                <button className='confirmationButton' onClick={() => {
                    this.handleClick()
                    }}>Sum</button>
                <button className='confirmationButton' onClick={() => {
                    this.clearFields()
                }}>Clear</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        );
    }
}

export default Sum;