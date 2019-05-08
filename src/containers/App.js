import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'srttfh', name: 'Max', age: 28 },
            { id: 'rsgsfg', name: 'Manu', age: 29 },
            { id: 'adfvdv', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };  // using the spread operator ... to get the elements of person object

        // equivalent assignment as above - {} is the new person Object
        // const person = Object.assign({}, this.state.person[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} );
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();     // make a copy of the current persons array
        const persons = [...this.state.persons];           // make a copy array using the spread operator ...
        persons.splice(personIndex, 1);     // Remove one element from the array
        this.setState({persons: persons});  // Update the state with persons array - 1
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons} 
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
