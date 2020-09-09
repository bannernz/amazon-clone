import React, {createContext, useContext, useReducer} from 'react';

// Prepares data layer
export const StateContent = createContext([[], () => {}]);

// Wrap app with Datalayer
export const StateProvider = ({reducer, initialState, children}) => {
    return <StateContent.Provider value={useReducer(reducer, initialState)}>{children}</StateContent.Provider>;
};

// Pull data layer
export const useStateValue = () => useContext(StateContent);
