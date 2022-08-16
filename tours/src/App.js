import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const  [tours,setTours] = useState(url)
  const [loading,setLoading] = useState(true)

  const fetchTours = async() =>{
    try{
      const response = await axios(url)
      const tours = response.data
      setLoading(false)
      setTours(tours)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours()
  })

  if(tours.length===0){
    return(
      <main>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </main>
    )
  }
    if(loading){
      return(
        <div>
          <Loading/>
        </div>
      )
    }
  
  return(
    <>hello
    <Tours tours={tours}/>
    </>

  )
}
export default App
