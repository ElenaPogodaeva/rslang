import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/loginForm";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { Api } from "../../api/api";
import style from '../../components/Form/LoginForm.scss';
import { Alert } from "@mui/material";
import { ErrorObject } from "webpack/node_modules/schema-utils/declarations/validate";
import { UserLogin } from "types";

const LoginPage = () => {
  const api = new Api();

  const [isFetching, setFetching] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const loginUser = React.useCallback(async (user: UserLogin) => {
    setFetching(true);

    try {
      const loginUser = await api.loginUser(user);
      const getUser = await api.getUserById();

      dispatch(setUser({token: loginUser.token, email: getUser.email, id: getUser.id, name: getUser.name}));

      navigate('/');
    } catch(error) {
      setErrorMessage((error as Error).message);
    } finally {
      setFetching(false);
    }

  }, []);

  return (
    <div>
      {errorMessage && <Alert severity="error">Не правильный логин или пароль</Alert>}
      <LoginForm
        title="Log in"
        handleClick={loginUser}
        isFetching={isFetching}
      />
      <div className={style.linkContainer}>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  )
}

export default LoginPage;