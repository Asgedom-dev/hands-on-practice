import React, { useState } from 'react'

const data = [{ id: 1, title: 'homework', completed: false }]

const validation = (value) => {
  let errors = {}
  if (!value.title) {
    errors.title = 'Name is required'
  }
  return errors
}
const Todo = () => {
  const [name, setName] = useState('')
  const [todoList, setTodoList] = useState(data)
  const [editId, setEditId] = useState(null)
  const [isEdit, setIsEdit] = useState(false)
  const [errors, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      console.log('handle error')
      setError(validation(todoList))
    } else if (name && isEdit) {
      setTodoList(
        todoList.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setEditId(null)
      setIsEdit(false)
      setName('')
    } else {
      const newList = { id: new Date().getTime().toString(), title: name }
      setTodoList([...todoList, newList])
      setName('')
    }
  }

  const handleEdit = (id) => {
    const editTodoList = todoList.find((item) => item.id === id)
    setEditId(id)
    setName(editTodoList.title)
    setIsEdit(true)
  }
  const handleRemove = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)

    setTodoList(newTodoList)
    setName('')
  }
  const handleCompleted = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  return (
    <div className='form-wrap'>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {errors.title && <p>{errors.title}</p>}
        <button style={{ margin: '10px' }} type='submit'>
          {isEdit ? 'Edit' : 'Submit'}
        </button>
      </form>
      {todoList.map((item) => {
        const { id, title, completed } = item
        return (
          <div style={{ margin: '10px' }} key={id}>
            <input
              type='checkbox'
              onClick={() => handleCompleted(id)}
              readOnly
              checked={completed}
            />
            <span className={completed ? 'done' : ''}>{title}</span>
            {/* <span style={{marginRight:'10px' , color:`${completed?"red":""}`}}>{title}</span> */}
            <button type='button' onClick={() => handleEdit(id)}>
              Edit
            </button>
            <button type='button' onClick={() => handleRemove(id)}>
              Remove
            </button>
            {/* <button type="button" onClick={()=>handleCompleted(id)}>completed</button> */}
          </div>
        )
      })}
    </div>
  )
}

export default Todo
