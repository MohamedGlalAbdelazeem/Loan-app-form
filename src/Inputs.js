import { useContext } from "react";
import { loanInputContext } from "./contexts/LoanFormInputContext";

export default function Inputs() {
    const inputContext = useContext(loanInputContext);
    return(
        <>
        <label>{inputContext.labelName}</label>
            <input 
            type="text" 
            value={inputContext.value} 
            onChange={(e)=>{
                inputContext.handleChange(e.target.value)
            }
            }/>
        </>
    );
}