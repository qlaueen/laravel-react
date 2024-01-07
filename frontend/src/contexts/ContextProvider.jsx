import { useState } from "react";
import StateContext from "./StateContext";

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: 'Tom Cook',
        email: 'tom@example.com',
    });
    const [userToken, setUserToken] = useState('')

    return (
        <StateContext.Provider value={{ 
            currentUser, 
            setCurrentUser, 
            userToken, 
            setUserToken
        }}>
            {children}
        </StateContext.Provider>
    )
}