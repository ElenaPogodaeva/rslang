import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/loginForm";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setUser } from "store/slices/userSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (user: {email: string, password: string}, props?: any) => {
    props.validateForm();
    console.log(props)
    console.log('Log in')
  }

  return (
    <div>
      <h2>Log in</h2>
      <LoginForm
        title="Log in"
        handleClick={handleLogin}
      />

      <Link to="/registration">Registration</Link>
    </div>
  )
}

export default LoginPage;