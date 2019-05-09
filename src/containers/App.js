import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

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
        showPersons: false,
        showCockpit: true,
        changecounter: 0
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) { // use for Optimization / conditional execution
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate')
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

        this.setState({ 
            persons: persons, 
            changecounter: this.state.changecounter + 1 
        });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();     // make a copy of the current persons array
        const persons = [...this.state.persons];           // make a copy array using the spread operator ...
        persons.splice(personIndex, 1);     // Remove one element from the array
        this.setState({ persons: persons });  // Update the state with persons array - 1
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({
                        showCockpit: false
                    })
                }}>Remove Cockpit</button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                    />
                ) : null}
                {persons}
            </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default withClass(App, classes.App);
