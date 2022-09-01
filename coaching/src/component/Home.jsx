
const stayling = {
  margin: '10px',
}


function App({selectButton}) {
  
  return (
    <div>
      <p>We are the heart of appropriate care</p>
      <div>
        <button onClick={selectButton} style={stayling}>Login as a Coach</button>
        <button onClick={selectButton}>Join as a Coach</button>
      </div>
      <div>
        <button>Login as a User</button>
        <button>Join as a User</button>
      </div>
    </div>
  )
}
export default App
