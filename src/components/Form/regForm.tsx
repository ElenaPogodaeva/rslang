import React from "react";
import {Formik, Form, Field, FieldProps} from 'formik';
import * as yup from 'yup';
import { FC } from "react";
import { useSelector } from "react-redux";
import { FormInput } from '../ui-kit';
import { Button } from '@mui/material';
import style from './LoginForm.scss';

interface FormProps {
  title: string;
  handleClick: (user: {name: string, email: string, password: string}) => void;
}

let validationSchema = yup.object().shape({
  password: yup.string().required('fffff').length(8, 'э ауауцацац'),
  email: yup.string().required('ssssssss').email('dfefefefefeefefef'),
  name: yup.string().required(),
});

export const RegForm: FC<FormProps> = ({title, handleClick}) => {
  const user = useSelector((state: any) => state.user)

  return (
    <Formik onSubmit={handleClick} initialValues={{name: '', email: '', password : ''}} validationSchema={validationSchema}>
      <Form>
      <div className={style.controlsWrapper}>
        <div className={style.controlsWrapper__control}>
        <Field 
            type="text"
            name="name"
            placeholder="name"
          >
            {(props:FieldProps) => <FormInput label="Name" id={"name"} {...props}/>}
          </Field>
        </div>
          <div className={style.controlsWrapper__control}>
          <Field
            type="email"
            name="email"
            placeholder="email"
          >
            {(props:FieldProps) => <FormInput label="Email" id={"email"} {...props}/>}
          </Field>
          </div>
          <div  className={style.controlsWrapper__control}>
          <Field 
            type="password"
            name="password"
            placeholder="password"
          >
            {(props:FieldProps) => <FormInput label="Password" id={"password"} {...props}/>}
          </Field>
          </div>

          <Button type="submit" className={style.controlsWrapper__control}>
            {title}
          </Button>
      </div>
      </Form>
    </Formik>
  )
}