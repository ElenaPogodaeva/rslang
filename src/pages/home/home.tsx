import React from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useSelector} from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
 const dispatch = useAppDispatch();
 const user = useSelector((state: {user: {id: string, token: string, email: string, name: string}}) => state);
 
 const auth = useAuth();
 const navigate = useNavigate();

 const logOut = () => {
  dispatch(removeUser());
  navigate('/');
 } 

  return (
    <>
      <h2>Home</h2>
      <span>{user.user.name}</span>
      <br></br>
      <span>{user.user.email}</span>
      {auth.isAuth && <button onClick={logOut}>Log out</button>}      
    </>
  )
}

export default HomePage;
