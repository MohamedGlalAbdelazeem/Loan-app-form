import './App.css';
import Form from "./Form";
import  {userContext} from './contexts/userContext';

function App() {
  return (
    <userContext.Provider value={{userName:"aboglal122" , name:"aliglal" , gmail:"foo.gmai.com"}}>
    <div className="App">
      <Form/>
    </div>
    </userContext.Provider>

  );
}

export default App;
