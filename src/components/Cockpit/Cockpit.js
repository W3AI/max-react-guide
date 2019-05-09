import React, { useEffect } from 'react';

import classes from './Cockpit.css';

// const cockpit = ( props ) => {       // this one didn't work as per Max

function Cockpit( props ) {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    }, [props.persons]);        // useEffect to execute only when props.persons change !!!

    // useEffect();

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);    // classes = ['red']
    } 
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);   // classes = ['red', 'bold'] 
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')} >
                ToDo: 3ai - 
                &lt;ai team/&gt; 	&#10038;
                &lt;ai code/&gt; 	&#10038;
                &lt;ai data/&gt;
                </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;