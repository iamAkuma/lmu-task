// context <API> </>
// useContext hooks

// useContext(warehouse)
// Provider (delivery person)
// consumer / (useContext(us))
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=avengers`;

//Create Provider function now
const AppProvider = ({ children }) => {

    const [isLoading, setisLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError, setIsError] = useState({show:"false", msg : " "});

    const getMovies = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True")
            {
                setisLoading(false);
                setMovie(data.Search)
            }
            else
            {
                setIsError({
                    show: true,
                    msg: data.error,
                })
            }
        } catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        getMovies(API_URL);
    }, []);


    return <AppContext.Provider value={{isLoading, isError, movie}}>
        {children}
    </AppContext.Provider>
};

//global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobalContext}