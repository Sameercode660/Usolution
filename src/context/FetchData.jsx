import { createContext, useContext, useEffect, useState } from "react";
import databases from "../appwrite/fetchData_appwrite";

const FetchDataContext = createContext()

export const FetchDataContextProvider = ({children})=>{

    const [cLangAsn1, setClangAsn1] = useState([])

    async function fetchingData(){
        const response = await databases.listDocuments('652e497b8cd0a7ceaca1','652e4ae377d536393098')
        setClangAsn1(response.documents)
    }

    useEffect(()=>{
        fetchingData()
    }, [])
    return(
        <FetchDataContext.Provider value={{cLangAsn1}}>
            {children}
        </FetchDataContext.Provider>
    )
}


export default function useFetchData()
{
    return useContext(FetchDataContext)
}