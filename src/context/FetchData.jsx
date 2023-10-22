import { createContext, useContext, useEffect, useState } from "react";
import databases from "../appwrite/fetchData_appwrite";

const FetchDataContext = createContext()

export const FetchDataContextProvider = ({children})=>{

    const [cLangAsn1, setClangAsn1] = useState([])
    const [cLangAsn2, setClangAsn2] = useState([])
    const [cLangAsn3, setClangAsn3] = useState([])
    const [cLangAsn4, setClangAsn4] = useState([])
    const [cLangAsn5, setClangAsn5] = useState([])
    const [cLangAsn6, setClangAsn6] = useState([])
    const [cLangAsn7, setClangAsn7] = useState([])
    const [cLangAsn8, setClangAsn8] = useState([])
    

    async function fyClangAssnFetchData(){
        const assignment1 = await databases.listDocuments( import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_COLLECTION_FY_C_ASSN1_ID )
        setClangAsn1(assignment1.documents)
        const assignment2 = await databases.listDocuments( import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_COLLECTION_FY_C_ASSN2_ID )
        setClangAsn2(assignment2.documents)
    }

    async function fyDbmsAssnFetchData()
    {

    }

    async function fyWebTechAssnFetchData()
    {

    }

    async function fyRdbmsAssnFetchData()
    {

    }

    
    return(
        <FetchDataContext.Provider value={{cLangAsn1, cLangAsn2, fyClangAssnFetchData}}>
            {children}
        </FetchDataContext.Provider>
    )
}


export default function useFetchData()
{
    return useContext(FetchDataContext)
}