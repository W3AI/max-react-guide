import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                    </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

// Can add func with definition of types of args and output
Person.propTypes = {
    click: Proptypes.func,
    name: Proptypes.string,
    age: Proptypes.number,
    changed: Proptypes.func
};

export default withClass(Person, classes.Person);