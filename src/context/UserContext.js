import React, { createContext } from 'react';

export const authContext = createContext();
const UserContext = ({children}) => {
    const authInfo = {name: 'mahian'}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;