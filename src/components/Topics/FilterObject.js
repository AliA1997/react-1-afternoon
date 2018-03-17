import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 
                    'Lebron James',
                    jerseyNumber: 23, 
                    team: 'Cleveland Cavaliers',
                    age: 33,
                },
                {
                    name: 'Kevin Durant',
                    jerseyNumber: '35',
                    team: 'Golden State Warriors',
                    age: 30,
                },
                {
                    name: 'Stephen Curry',
                    jerseyNumber: 30,
                    team: 'Golden State Warriors',
                    age: 30,
                },
                {
                    name: 'James Harden',
                    jerseyNumber: 13,
                    team: 'Houston Rockets',
                    age: 27,
                },
                {
                    name: 'Chris Paul',
                    jerseyNumber: 3,
                    team: 'Houston Rockets',
                    age: 33,
                },
                {
                    name: 'Damien Lillard',
                    jerseyNumber: 0,
                    team: 'Portland Trail Blazers',
                    age: 28,
                },
                {
                    name: 'Dwyane Wade',
                    jerseyNumber: 3,
                    team: 'Miami Heat',
                    age: 36,
                },
                {
                    name: 'Klay Thompson',
                    jerseyNumber: 11,
                    team: 'Golden State Warriors',
                    age: 28,
                },
            ],
            filteredArray: [],
            userInput: '',
        };
    }
    handleChange(val) {
        this.setState(() => {
            //Return the state object.
            return {
                userInput: val, 
            }
        })
    }
    handleClick(key) {
        let filterArr = this.state.unFilteredArray.map(player => player[key]);
        this.setState(() => {
           return {
               filteredArray: filterArr.join(' '),
               userInput: '',
           } 
        })
    }
    //One parent div element, one h4 element, one
    // span element, one input element, one button element, 
    //and one span element.
    render() {
        return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>
            Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>
            <input className='inputLine' onChange={(e) => {
                this.handleChange(e.target.value);
            }}/>
            <button className='confirmationButton' onClick={() => {
                this.handleClick(this.state.userInput)
            }}>Filter</button>
            <span className='resultsBox filterObjectRB'>Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            <br/>
        </div>
        );
    }
}

export default FilterObject;