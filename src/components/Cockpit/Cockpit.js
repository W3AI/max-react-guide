import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

// const cockpit = ( props ) => {       // this one didn't work as per Max

function Cockpit( props ) {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);        // useEffect to execute only when [props.persons] change !!!
                // e.g.: use [props.predecessor1, props.predecessor2, ...]
                // or if array empty [] it will exec only at first time rendering

    useEffect(() => { // w/o 2nd arg it will run for every update cycle!!! - eg: trigger Next task/comm, etc
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);    // classes = ['red']
    } 
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);   // classes = ['red', 'bold'] 
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')} >
                ToDo: 3ai - 
                &lt;ai data/&gt; 	&#10038;
                &lt;ai team/&gt; 	&#10038;
                &lt;ai code/&gt;
                </p>
            <button ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle skills Mart</button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(Cockpit);