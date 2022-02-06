import React from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useSelector} from 'react-redux';
import { setUser } from "../../store/slices/userSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
 const dispatch = useAppDispatch();
 const user = useSelector((state: {user: {id: string, token: string, email: string}}) => state);

  return (
    <>
      <h2>Home
      <button onClick={() => dispatch(setUser({token: '33333', email: 'ff@fft', id: "1"}))}>setsatet</button>{user.user.email}
      </h2>

      <Link to="/login">Log in</Link>
      <br></br>
      <Link to="/registration">Registration</Link>
      </>
  )
}

export default HomePage;

