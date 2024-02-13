import { createContext } from "react";

export let loanInputContext = createContext({
    labeltitle:"" , 
    inputValue:null,
    handleChange:null 
});