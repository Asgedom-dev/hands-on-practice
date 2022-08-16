import {useState,useRef, useEffect} from 'react'
const data = [
  {id:1,todos:"homework",completed:true},
  {id:2,todos:"loundery",completed:false}
]
function App(){
  const [todoList,setTodoList] = useState(data)
  const [todo,setTodo]=useState('')
  const [isEdit,setIsEdit]=useState(false)
  const [editId,setEditId]=useState(null)
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!todo){
      console.log('handle edit')
    }else if(todo&&isEdit){
      setTodoList(
        todoList.map((item)=>{
          if(item.id===editId){
            return {...item,todos:todo}
          }
          return item
        })
      )
      setTodo('')
      setEditId(null)
      setIsEdit(false)

    }else{
      const addTodoList = {id: new Date().getTime().toString(),todos:todo}
      setTodoList([...todoList,addTodoList])
      setTodo('')
  }
  }
  const handleEdit=(id)=>{
    const editTodoList = todoList.find((item)=>item.id===id)
    setIsEdit(true)
    setTodo(editTodoList.todos)
    setEditId(id)

  }
  const handleRemove=(id)=>{
    const newTodoList = todoList.filter((item)=>item.id!==id)
    setTodoList(newTodoList)
    setTodo('')
  }
  const handleCompleted=(id)=>{
    setTodoList(
      todoList.map((item)=>{
        if(item.id===id){
          return {...item,completed:!item.completed}
        }
        return item
      })
    )
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <span>TODO</span>
      <input ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button type="submit">{isEdit?"edit":"submit"}</button>
    </form>
    
    <ul>{
      todoList.map((item)=>{
        const{id,todos,completed}= item;
        return(
          <ul key={id} style={{color:`${completed?"red":""}`}}>
            <p>{todos}</p>
            <button type="button" onClick={()=>handleEdit(id)}>Edit</button>
            <button type="button" onClick={()=>handleRemove(id)}>Remove</button>
            <button type="button" onClick={()=>handleCompleted(id)}>Completed</button>
          </ul>
          
        )
      })
    }
    </ul>
    </>
  )
}
export default App 