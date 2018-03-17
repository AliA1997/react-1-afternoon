import React, {Component} from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';
class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <p>Toy Problem Solver!!!!!</p>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        );
    }
}

//Export the default name of the component
export default TopicBrowser;