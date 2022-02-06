import { AuthicationForm } from "../../components/Form/Form";
import React from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
/*  const handleReg = (email: string, password: string) => {

    console.log('Reg')
  }*/

  const createUser = React.useCallback(async (user: any) => {
    const rawResponse = await fetch('https://<your-app-name>.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }, []);
  
  
  return (
    <div>
      <h2>Registration</h2>
      <AuthicationForm
        title="Sign in"
        handleClick={createUser}
      />

      <Link to="/login">Log in</Link>  
    </div>
  )
}

export default RegistrationPage;
