import React,{useState} from 'react'
import CoachSignup from '../component/CoachSignup'
import Home from '../component/Home'
import CoachLogin from '../component/CoachLogin'

function Form() {
    const [loginSelected,setLoginSelected]=useState(false)

    const selectButton=()=>{
        console.log('hello')
        setLoginSelected(true)
    }
    
    
  return (
    <div>
        {!loginSelected ? <Home selectButton={selectButton}/> : <CoachSignup/>}
    </div>
  )
}

export default Form