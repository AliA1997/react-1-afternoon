import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['Ali', 'Lebron James', 'Kobe Bryant', 'Bill Russell', 'Michael Jordan', 'Kareem Abul Jabbar', 'Shaquille O\'neal' ],
            filteredArray: [],
            userInput: '',
        }
    }
    handleChange(val) {
        this.setState(() => {
            return {
                userInput: val,
            }
        })
    }
    handleClick(val) {
        let newArr = [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++) {
            if(this.state.unFilteredArray[i].includes(val)) {
                newArr.push(this.state.unFilteredArray[i]);
            }
        }
        this.setState(() => {
            return {
                filteredArray: newArr,
                userInput: '',
            }
        });
    }
    //One paren div element, one h4 element, one span element, one input element, one button element, and another span element.
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)} value={this.state.userInput}/>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;