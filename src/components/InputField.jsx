import Submit from "./Submit.jsx";
const InputFeild = (props)=> {

    return (
        <div className="input-feild">
            <form>
                <input 
                    type="text"
                    name="username"
                    placeholder="Username"
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="password"
                    pattern=""
                    required
                />
                <Submit title={props.title} active="false" />
            </form>
        </div>
    );
}

export default InputFeild;