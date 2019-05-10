import React from 'react';

// Gobally (or custom) available js object, array, string, nr etc
const authContext = React.createContext({
    authenticated: false, 
    login: () => {}
});

export default authContext;