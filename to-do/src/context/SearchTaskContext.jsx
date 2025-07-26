import React,{createContext, useContext,useState} from "react";



const SearchTaskContext = createContext();

export const UseSearchTask = () => useContext(SearchTaskContext);

export function SearchTaskProvider({children}){
const[searchedTitle,setSearchedTitle]=useState('');
const[searchedDate,setSearchedDate]=useState(null);
const{Provider} = SearchTaskContext;
return(
    <Provider value = {{searchedTitle,setSearchedTitle,searchedDate,setSearchedDate}}>
        {children}
    </Provider>
);
};