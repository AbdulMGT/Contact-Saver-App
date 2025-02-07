import InputFeild from "./InputField";
const SignUp = (props) => {
    return (
       <InputContext.Provider value={props}>
           <div className="App-SignUp">
              <h1>{props.title}</h1>
              <InputFeild/>
           </div>
       </InputContext.Provider>
    );  
 }
 
 export default SignUp;