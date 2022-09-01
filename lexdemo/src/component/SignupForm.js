import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import validation from './validation'

function SignupForm({submitForm}) {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    password: '',
  })
const [dataIsCorrect,setDataIsCorrect] = useState(false)
  const [errors, setErrors]=useState({})

  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(data))
    setDataIsCorrect(true)
  }

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true)
    }
  },[errors,dataIsCorrect,submitForm])
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <h2 className='title'>Create Account</h2>
        </div>
        <form className='form-wrapper'>
          <div className='name'>
            <label className='label'>Ful Name</label>
            <input
              className='input'
              type='text'
              name='fullname'
              value={data.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className='error'>{errors.fullname}</p>}
          </div>
          <div className='email'>
            <label className='label'>Email</label>
            <input
              className='input'
              type='email'
              name='email'
              value={data.email}
              onChange={handleChange}
            />
            {errors.email&& <p className='error'>{errors.email}</p>}
          </div>
          <div className='password'>
            <label className='label'>Passowrd</label>
            <input
              className='input'
              type='password'
              name='password'
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div>
            <button
              type='submit'
              className='btn btn-success'
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupForm
