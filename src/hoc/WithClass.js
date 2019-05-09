import React from 'react';

const withClass = props => (
        <div className={props.classes}>{props.chidren}</div>
    );

export default withClass;