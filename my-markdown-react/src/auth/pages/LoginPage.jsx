import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { ErrorMessage, InputError } from "../../ui"
import { Button, Field } from "../components"
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: '',
  password: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'Email should have @'],
  password: [ (value) => value.length >= 6 , 'Password should have minimum 6 characteres'],
}

export const LoginPage = () => {

  const [ submited, setSubmited ] = useState(false);

  const {
    email, password, 
    formState, onInputChange, isFormValid, 
    emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    
    setSubmited(true);

    if ( !isFormValid ) return;

    console.log(formState);
    
  }

  return (
    <AuthLayout title='Log in'>

      {/* <div className="mb-3">
        <ErrorMessage />
      </div> */}

      <form onSubmit={ onSubmit }>

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

        <div className="flex mt-5 sm:justify-end">
          <Button
            disabled={ submited && !isFormValid }
            type='submit'
            text='Log in'
          />
        </div>

      </form>

      <div className="mt-5 flex justify-center sm:justify-end">
        <Link 
          to='/auth/register'
          className="text-sm text-purple-500 hover:text-purple-800 transition"
        >Do not have an account? Create account</Link>
      </div>

    </AuthLayout>
  )
}
