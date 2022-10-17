import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout"
import { useDocumentTitle, useForm } from "../../../hooks";
import { Button } from "../components"
import { Field } from "../../../components";
import { ErrorMessage, InputError } from "../../../ui";

const formData = {
  name: '',
  email: '',
  password: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'Email should have @'],
  password: [ (value) => value.length >= 6 , 'Password should have minimum 6 characteres'],
  name: [ (value) => value.trim().length > 3 && value.trim().length < 50, 'Name should have between 3 and 50 characteres'],
}

export const RegisterPage = () => {

  const [ submited, setSubmited ] = useState(false);
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

  const {
    name, email, password, 
    formState, onInputChange, isFormValid, 
    nameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    
    setSubmited(true);

    if ( !isFormValid || passwordConfirmation !== formState.password ) return;

    console.log(formState);
    
  }

  useDocumentTitle("Register");

  return (
    <AuthLayout title='Create account'>

      {/* <div className="mb-3">
        <ErrorMessage />
      </div> */}

      <form onSubmit={ onSubmit }>

        <div className="mb-2">
          <Field 
            value={ name }
            onChange={ onInputChange }
            type='text'
            name='name'
            label='Name'
            placeholder='Your name'
          />
          {
            (nameValid && submited) && (
              <div className="mt-2">
                <InputError message={ nameValid } />
              </div>
            )
          }
        </div>

        <div className="mb-2">
          <Field 
            value={ email }
            onChange={ onInputChange }
            type='email'
            name='email'
            label='Email'
            placeholder='you@domain.com'
          />
          {
            (emailValid && submited) && (
              <div className="mt-2">
                <InputError message={ emailValid } />
              </div>
            )
          }
        </div>

        <div className="mb-2">
          <Field 
            value={ password }
            onChange={ onInputChange }
            type='password'
            name='password'
            label='Password'
            placeholder='Your password'
          />
          {
            (passwordValid && submited) && (
              <div className="mt-2">
                <InputError message={ passwordValid } />
              </div>
            )
          }
        </div>

        <div className="mb-2">
          <Field 
            value={ passwordConfirmation }
            onChange={ (event) => setPasswordConfirmation(event.target.value) }
            type='password'
            name='password_confirmation'
            label='Password Confirmation'
            placeholder='Repeat your password'
          />
          {
            (passwordConfirmation !== password && submited) && (
              <div className="mt-2">
                <InputError message={"Passwords don't match"} /> 
              </div> 
            )
          }
        </div>

        <div className="flex mt-5 sm:justify-end">
          <Button 
            disabled={ !isFormValid && passwordConfirmation !== password && submited }
            type='submit'
            text='Register'
          />
        </div>

      </form>

      <div className="mt-5 flex justify-center sm:justify-end">
        <Link 
          to='/auth/login'
          className="text-sm text-purple-500 hover:text-purple-800 transition"
        >Already have an account? Log in</Link>
      </div>

    </AuthLayout>
  )
}
