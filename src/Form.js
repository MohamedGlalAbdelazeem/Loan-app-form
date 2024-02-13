import { useState } from "react";
import { useContext } from "react";
import "./form.css";
import Modal from './Modal';
import { isVisible } from "@testing-library/user-event/dist/utils";
import MyComponents from "./MyComponents";
import { loanInputContext } from "./contexts/LoanFormInputContext";
import { userContext } from "./contexts/userContext";

export default function Form() {
    const userData = useContext(userContext);
    const [inputValue , setinputValue] = useState({
        name :"",
        phoneNumber:"",
        Age:"",
        chechBox:"",
        salary:""
    });
    
    const btnIsdisable = 
    inputValue.name == "" ||
    inputValue.Age == "" ||
    inputValue.phoneNumber == "";

    const [errorMessage , seterrorMessage ] = useState(null);  
    const [showModal , setShowModal] = useState(false);
 
   
    function handleSendBtn(e){
        e.preventDefault();
        setShowModal(true);
        setinputValue({
            name: "",
            phoneNumber: "",
            Age: "",
            chechBox: false,
            salary: ""
        });
        if (inputValue.Age < 20 || inputValue.Age > 28) {
            seterrorMessage("هذا العمر لايصلح للتقديم علي قرض");
            setTimeout(() => {       
                window.location.reload();
            }, 1500);
        }else if(inputValue.phoneNumber.length < 10 || inputValue.phoneNumber.length > 12){
            seterrorMessage("تأكد من رقم الهاتف ");
            setTimeout(() => {       
                window.location.reload();
            }, 1500);
        }
   }

   // this function to hiddent the modal message  
   function removeModal() {
    setShowModal(false);
   }

    function handleNameinputchange(value) {
        setinputValue({...inputValue , name:value})
    }

    function handlePhoneAgeinputchange(value) {
        setinputValue({...inputValue , Age:value})
    }

    function handlePhoneNumberinputchange(value) {
        setinputValue({...inputValue , phoneNumber:value})
    }
    return(
    <>
          <form onClick={removeModal}>
              <h1>نموذج طلب قرض </h1>
            <hr/>

           <loanInputContext.Provider value={{value :inputValue.name , handleChange:handleNameinputchange , labelName:"الاسم "}}>
             <MyComponents />
           </loanInputContext.Provider>
           
           <loanInputContext.Provider value={{value :inputValue.Age , handleChange:handlePhoneAgeinputchange , labelName:"العمر "}}>
             <MyComponents />
           </loanInputContext.Provider>

           <loanInputContext.Provider value={{value :inputValue.phoneNumber , handleChange:handlePhoneNumberinputchange , labelName:"الهاتف "}}>
             <MyComponents />
           </loanInputContext.Provider>
           
            <label>هل لديك مصدر دخل ؟</label>
            <input type="checkbox" value={inputValue.chechBox} onChange={(e)=>{setinputValue({...inputValue , chechBox:e.target.checked})}}/>            

            <label >رجاء نحديد قيمة القرض المطلوبة</label>
            <select style={{marginTop:"20px"}}   value={inputValue.salary}  onChange={(e)=>{setinputValue({...inputValue, salary:e.target.value})}}>
                <option >1000 EGP</option>
                <option >1500 EGP</option>
                <option >2000 EGP</option>
                <option >2500 EGP</option>
                <option >3000 EGP</option>
                <option >3500 EGP</option>
                <option >4000 EGP</option>
                <option >4500 EGP</option>
                <option >5500 EGP</option>
                <option >6000 EGP</option>
                <option >6500 EGP</option>
                <option >7000 EGP</option>
                <option >7500 EGP</option>
                <option >8000 EGP</option>
                <option >8500 EGP</option>
                <option >9000 EGP</option>
                <option >9500 EGP</option>
                <option >10000 EGP</option>
            </select>
            
            <Modal errorMessage={errorMessage} isVisiable={showModal} />
          </form>
            <button  
                disabled={btnIsdisable} 
                className={btnIsdisable ? "disabled" :   "able"}
                type="submit"  onClick={handleSendBtn}>إرسال
            </button>
    </>  
    );
}