import React, { useState } from 'react';
import FormInput from "../../components/formInput/FormInput"
import "./register.scss";
const Register = () => {
  const [inputValues, setInputValues]=useState({
    username:"",
    email:"",
    pasword:"",
    confirmPassword:"",

  });
  const inputs =[
    {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
  },
  {
    id:3,
    name:"password",
    type:"password",
    placeholder:"Password",
  },    {
    id:4,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Paswword",
  },
]
  const handleChange = (e) =>{
    setInputValues({...inputValues, [e.target.name]:e.target.value});
  };
  return (
    <div className="register">
     <form>
        {inputs.map((input)=>(
          <FormInput key={input.id}{...input}
          value={inputValues[input.name]} 
          onChange={handleChange}
          />
        ))}
       
        <button type="submit">Register</button>
     </form>
    </div>
  );
}

export default Register