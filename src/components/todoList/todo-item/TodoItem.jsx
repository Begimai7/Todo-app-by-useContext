import styled from 'styled-components'
import { ACTIONS, useTodoContext } from '../../../store/TodoProvider'

export const TodoItem = ({todo, index}) => {
const {dispatchTodo} = useTodoContext()

const removeItemHandler = () => {
  dispatchTodo({ type: ACTIONS.REMOVE_TODO, payload: {index: index}})
}
const completedItemHandler = () => {
  dispatchTodo({ type:  ACTIONS.COMPLETE_TODO, payload: {index: index}})
}  

  return (
   <ItemContainer>
    <li style={{color: todo.complete ? "#64df1d" : "#fff"}}>{todo.title}</li>
    <div>
    <CompleteBtn onClick={completedItemHandler}>Completed</CompleteBtn>
    <RemoveBtn onClick={removeItemHandler}>Remove</RemoveBtn>
    </div>
   
   </ItemContainer>
   
  )
}
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`
const CompleteBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #1bdb35;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
`
const RemoveBtn = styled.button`
 padding: 10px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #db311b;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
`