import React from "react";
import { Link } from "react-router-dom";
import { RegForm } from "../../components/Form/regForm";

const RegistrationPage = () => {
 
  const [isFetching, setFetching] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const createUser = React.useCallback(async (user: any) => {
    setFetching(true);
    try {
      const rawResponse = await fetch('https://rslang-team54.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      const fetchToken = await fetch('https://rslang-team54.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      const content = await rawResponse.json();
  
      const token  = await fetchToken.json();
      console.log(token.token)
    } catch (error: any) {
        setErrorMessage(error.message);
    } finally {
      setFetching(false);
    }
  }, []);
  
  
  return (
    <div>
      <h2>Registration</h2>
      {isFetching && <div><h1>ЗАГРУЖАЮ...</h1></div>}
      <div><h1>{errorMessage}</h1></div>
      <RegForm
        title="Sign in"
        handleClick={createUser}
      />

      <Link to="/login">Log in</Link>  
    </div>
  )
}

export default RegistrationPage;
