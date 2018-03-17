import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evens: [],
            odds: [],
            userInput: ''
        }
    }
    inputValue(val) {
        this.setState(() => {
            return {
                userInput: val
            }
        })
    }
    assignOddsAndEvens(input) {
        let newArr = input.split(',');
        let oddsArray = [];
        let evensArray = [];
        for(let i = 0; i < newArr.length; i++) {
            if(newArr[i] % 2 === 0) {
                evensArray.push(parseInt(newArr[i], 10));  
            } else if(newArr[i] % 2 === 1) {
                oddsArray.push(parseInt(newArr[i], 10));
            }
        }
        this.setState(() => {
            return {
                evens: evensArray,
                odds: oddsArray,
                userInput: '',
            }
        });
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={
                    (event) => {
                        this.inputValue(event.target.value);
                    }
                } value={this.state.userInput}/>
                <button className="confirmationButton" onClick={() => {
                    this.assignOddsAndEvens(this.state.userInput)
                    }}>Split</button>
                <span className="resultsBox">Evens:{JSON.stringify(this.state.evens)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.odds)}</span>
            </div>
        );
    }
}

export default EvenAndOdd