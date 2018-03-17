import React, {Component} from 'react';

class Palindrome extends Component {
    //Invoke constructor function which sets the initial state.
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }
    handleChange(val) {
        //Set the state of the userInput to the val parameter.
        this.setState(() => {
            return {
                userInput: val,
            };
        });
    }
    handleClick(val) {
        let elem = val.split('');
        let result = false;
        while(elem.length) {
            let last = elem.pop();
            let first = elem.shift();
            if(first !== last) {
                result = false;
            } else {
                result = true;
            }
        } 
        this.setState(() => {
            return {
                palindrome: result,
            }
        })
    }
    //Invoke the clearField method that reset the states 
    clearField() {
        this.setState(() => {
            return {
            userInput: '',
            palindrome: '',
            };
        });
        console.log('cleared!');
    }
    //One parent div element, one h4 element, one input element, one button element, and one span element.
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)} value={this.state.userInput} />
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Check</button>
                <button className='confirmationButton' onClick={() => this.clearField()}>Clear</button>
                <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        );
    }
}

export default Palindrome;