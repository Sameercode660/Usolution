import { createContext, useContext, useEffect, useState } from "react";
import databases from "../appwrite/fetchData_appwrite";

const FetchDataContext = createContext()

export const FetchDataContextProvider = ({children})=>{

    const [cLangAsn1, setClangAsn1] = useState([])

    async function fetchingData(){
        const response = await databases.listDocuments( import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_COLLECTION_FY_C_ASSN1_ID )
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