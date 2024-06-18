import React, { createContext, useReducer, useContext, useEffect, useState } from "react";


// initaial values
const initialState = {
    loading: true,
    menu: {},
    isOnline: window.navigator.onLine === true ? true : false,
};

/**
 * create context
 */
const Context = createContext([{}, () => { }]);

/**
 * 
 * @param {*} props 
 * @returns 
 */
function Provider(props) {

    const [init, setInit] = useState(false);

    const reducer = (state, action) => {

        switch (action.type) {
            
            case 'SET_LOADING':
                return {
                    ...state,
                    loading: action.loading,
                }

            default:
                return state;
        }
    }

    const [store, dispatch] = useReducer(reducer, initialState);

    /**
     * 
     * @param {*} e 
     */
    const handleStorageUpdate = (e) => {

        const db = ['test'];

        if (db.includes(e.key)) {
            dispatch({
                type: 'UPDATE_STORAGE',
                key: e.key,
                newValue: e.newValue
            });
        }
    }

    /**
     * 
     */
    useEffect(() => {
        window.addEventListener("storage", handleStorageUpdate);

        return () => window.removeEventListener("storage", handleStorageUpdate);

    }, []);

    /**
     * Navigator.onLine
     * Navigator.offLine
     * @return boolean
     */
    const handleNetworkChange = (e) => {

        dispatch({
            type: 'IS_ONLINE',
            status: window.navigator.onLine === true ? true : false,
        });
    }

    // online offline
    useEffect(() => {
        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);

        return () => {
            window.removeEventListener('online', handleNetworkChange);
            window.removeEventListener('offline', handleNetworkChange);
        };

    }, []);


    /**
     * get data from server
     */
    useEffect(() => {

        setInit(true);
    }, [init]);


    

    return (
        <Context.Provider value={{ store, dispatch }}>
            {props.children ? props.children : null}
        </Context.Provider>
    )
}

/**
 * 
 * @returns 
 */
 export function useLoading() {
    const { store, dispatch } = useStore();
    return { isLoading: store.loading, setLoading: (loading = true) => {
        dispatch({
            type: 'SET_LOADING',
            loading: loading
        });
    }};
}

/**
 * get full store
 * 
 * @returns 
 */
export function useStore() {
    return useContext(Context);
}

export {
    Provider as AppProvider,
    Context as AppContext,
};

export default Provider;