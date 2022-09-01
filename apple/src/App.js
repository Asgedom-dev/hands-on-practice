
import './App.css';
import Todo from './component/Todo'

const heading = {
  textAlign:'center',
  color:'blue'
}
function App() {
  return (
    <div style={heading}>
      <p> 
        TODO LIST
      </p>
      <Todo/>
      
    </div>
  );
}

export default App;
