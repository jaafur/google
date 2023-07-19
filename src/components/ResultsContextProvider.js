import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const ResultsContextProvider = ({children}) => {
    
    const [results,setResults] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [searchTerm,setSearchTerm] = useState('Elon Musk')
    


        const getResults = async (type) => {
             const url =`https://seo-api.p.rapidapi.com/v1${type}/q=${searchTerm}`;
             const options = {
                method: 'GET',
                headers: {
                    'X-Proxy-Location': 'GB',
                    'X-User-Agent': 'desktop',
                    'X-RapidAPI-Key': 'ad33b2445dmsh302fed887ffa36dp126de6jsn87ffec43f3f9',
                    'X-RapidAPI-Host': 'seo-api.p.rapidapi.com'
                }
            };

        try {
            setIsLoading(true)
            const response = await fetch(url, options);
            const result = await response.json();
            setIsLoading(false)
            setResults(result)
            
         
        } catch (error) {
            console.error(error);
        }
    

}


       
   
    const contextValue = {
        getResults,
        results,
        isLoading,
        searchTerm,
        setSearchTerm,
      };
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}

export default ResultsContextProvider
