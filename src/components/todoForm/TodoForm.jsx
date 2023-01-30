import React, { useState } from 'react'
import styled from 'styled-components'
import { ACTIONS, useTodoContext } from '../../store/TodoProvider'



export const TodoForm = () => {
const {dispatchTodo} = useTodoContext()
const [titleTodo, setTitleTodo] = useState("")

const titleInputChange = e => {
  setTitleTodo(e.target.value)
}


const submittodo = (e) =>{
  e.preventDefault()

  dispatchTodo({ type: ACTIONS.ADD_TODO, payload: {title: titleTodo}})
  setTitleTodo("")

  localStorage.setItem("Todos", JSON.stringify(titleTodo))
}

  return (
    <div>
      <div>
        <h2>TODO LIST</h2>
        <Form>
          <InutStyled 
           type="text"
           placeholder='Add todo...'
           value={titleTodo}
           onChange={titleInputChange}
            />
          <Button onClick={submittodo}>ADD</Button>
        </Form>
      </div>
    </div>
  )
}

const Button = styled.button`
  padding: 12px 40px;
  background-color: #e533f5;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  color: #fff;
`
const Form = styled.form`
display: flex;
align-items: center;
`
const InutStyled = styled.input`
 width: 60%;
 margin-left: 50px;
 margin: 10px 15px ;
 padding: 15px;
 border: none;
 border-radius: 10px;
 outline: none;
`