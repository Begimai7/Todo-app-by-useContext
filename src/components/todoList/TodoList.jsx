import React from 'react'
import styled from 'styled-components'
import { useTodoContext } from '../../store/TodoProvider'
import { TodoItem } from './todo-item/TodoItem'


export const TodoList = () => {
  const {todos} = useTodoContext()

  return (
    <ListStyled>
      {
        todos.map((item, index,) => (
        <TodoItem 
          key={index}
          todo={item}
          index={index}
           />
        ))
      }
    </ListStyled>
  )
}
const ListStyled = styled.ul` 
 list-style: none;
 height: 45vh;
 overflow-y: scroll;
`