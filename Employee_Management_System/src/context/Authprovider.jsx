import React, { createContext, useEffect } from 'react'
import { getdata } from '../utils/Localstorage';
import { useState } from 'react';

 export const Authcontext = createContext();

const Authprovider = ({ children }) => {

    const [userdata, setuser] = useState(() => {
        try {
            const { employees, admin } = getdata();
            return { employees, admin };
        } catch (err) {
            console.error('Failed to load auth data:', err);
            return { employees: [], admin: null };
        }
    });

    return (
        <div>
            <Authcontext.Provider value={userdata}>
                {children}
            </Authcontext.Provider>
        </div>
    )
}


export default Authprovider
