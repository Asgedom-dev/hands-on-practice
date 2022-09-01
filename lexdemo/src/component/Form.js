import React,{useState} from 'react'
import SignupForm from './SignupForm'
import SuccessPage from './SuccessPage'

function Form() {
 const [formIsSubmited,setFormIsSubmited]=useState(false)

  const submitForm=()=>{
    setFormIsSubmited(true)
  }
  return (
    <div>{!formIsSubmited?<SignupForm submitForm={submitForm}/>:<SuccessPage/>}</div>
  )
}

export default Form