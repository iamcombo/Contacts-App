import React, { useState } from 'react';

import envs from '../config/env';
import RegisterComponent from '../components/Signup';

function Register() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { BACKEND_URL } = envs;

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if(value !== '') {
      if(name === 'password') {
        if(value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field need min 6 characters'}
          })
        } else {
          setErrors(prev => {
            return {...prev, [name]: null}
          })
        }
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required!'}
      })
    }
  }

  const onSubmit = () => {
    if(!form.username) {
      setErrors(prev => {
        return {...prev, username: "Please add a Username"}
      })
    }
    if(!form.firstname) {
      setErrors(prev => {
        return {...prev, firstname: "Please add a Firstname"}
      })
    }
    if(!form.lastname) {
      setErrors(prev => {
        return {...prev, lastname: "Please add a Lastname"}
      })
    }
    if(!form.email) {
      setErrors(prev => {
        return {...prev, email: "Please add a Email"}
      })
    }
    if(!form.password) {
      setErrors(prev => {
        return {...prev, password: "Please add a Password"}
      })
    }
  }

  return (
    <RegisterComponent 
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  )
}

export default Register;