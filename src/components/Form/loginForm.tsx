import React from "react";
import {Formik, Form, Field, FieldProps} from 'formik';
import * as yup from 'yup';
import { FC } from "react";
import { useSelector } from "react-redux";

interface FormProps {
  title: string;
  handleClick: (user: {email: string, password: string}) => void;
}

let validationSchema = yup.object().shape({
  password: yup.string().required().length(8).typeError('insert correct password'),
  email: yup.string().required().email().typeError('insert correct email'),
});

const FormInput = ({field, meta, name}: FieldProps & {name: string}) => {

  return <label>
    {name}
  {meta.touched && meta.error && (
     <div>{meta.error}</div>
  )}
  <input {...field} />
</label>
}

export const LoginForm: FC<FormProps> = ({title, handleClick}) => {
  const user = useSelector((state: any) => state.user)

  return (
    <Formik onSubmit={handleClick} initialValues={{email: '', password : ''}} validationSchema={validationSchema}>
      <Form>
        <Field 
          type="email"
          name="email"
          placeholder="email"
        >
          {(props:FieldProps) => <FormInput {...props} name={'Email'}/>}
        </Field>
        <Field 
          type="password"
          name="password"
          placeholder="password"
        >
          {(props:FieldProps) => <FormInput {...props} name={'Password'}/>}
        </Field>
        <button type="submit">
          {title}
        </button>
      </Form>
    </Formik>
  )
}
