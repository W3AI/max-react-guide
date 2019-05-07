import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
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
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                {this.state.persons.map((person, index) => {
                    return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
                } )}
            </div> 
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);    // classes = ['red']
        } 
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);   // classes = ['red', 'bold'] 
        }

        return (
            <div className={classes.App}>
                <h1>Hey, I'm a React App</h1>
                <p className={assignedClasses.join(' ')} >This is really working!</p>
                <button
                    className={btnClass}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
