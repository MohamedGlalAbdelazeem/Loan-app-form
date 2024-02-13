import Form from "./Form";
export default function Modal({isVisiable , errorMessage = null}) {
    if (isVisiable) {
        return(
            <div id="modal-content">
                <h1 style={{color : errorMessage ?  "red" : "green"}}>{errorMessage != null ?  errorMessage : "✅  تمت العملية بنجاح  " }</h1>
            </div>
    );
    } else {
        return(<></>);
    }
    
    
}