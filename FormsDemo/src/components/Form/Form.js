import React, { useEffect, useRef, useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null)
  
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const fileRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const buttonClick = () => {
    emailRef.current.focus();
  }

  const handleEmailChange = (event) => {
    setEmail(emailRef.current.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(passwordRef.current.value);
  };

  const handleFileChange = () => {
    setFile(fileRef.current.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${email}, ${password}`);
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>email:</label>
      <input
        ref={emailRef}
        
        type="email"
        name="email"
        // value={email}
        onChange={handleEmailChange} 
      />
      <br />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        ref={passwordRef}
        // value={password}
        onChange={handlePasswordChange}
      />
      <input type="file" onChange={handleFileChange}/>

      <button type="submit" >Submit</button>
      <button onClick={buttonClick}>Focus</button>
    </form>
  );
}

export default Form;
