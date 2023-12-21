import React,{useState} from "react";
import "./Formulario_module.css"

const Formulario=props=>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conpass, setConpass] = useState("");  

    return(
        <>
        <form>
            <div className="Input">
                <label>First Name </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className="Input">
                <label>Last Name </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className="Input">
                <label>Email     </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className="Input">
                <label>Password </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className="Input">
                <>
                    <label>Confirm <br /> Password  </label>
                </>
                <input type="text" onChange={ (e) => setConpass(e.target.value) } />
            </div>
            <div>
                <p className="p1">Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Pass: {conpass}</p>
            </div>
        </form>
        
        </>
    );
};
    

export default Formulario