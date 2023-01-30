import { createContext, useContext, useReducer } from "react"
const TodoContext = createContext()

const initState = [{
 id: new Date(), title: "Ice-cream", complete: false
} ]
export const ACTIONS = {
 ADD_TODO: "ADD_TODO",
 REMOVE_TODO: "REMOVE_TODO",
 COMPLETE_TODO: "COMPLETE_TODO"
}

const todoReducer = (todos, action) => {
 if(action.type === ACTIONS.ADD_TODO){
  return[...todos,
        newTodo(action.payload.title) ]
 }
 if(action.type === ACTIONS.REMOVE_TODO){
  return todos.filter((_, index) => index !== action.payload.index )
 }
 if (action.type === ACTIONS.COMPLETE_TODO){
  return todos.map((todo, index) => {
   if(index === action.payload.index){
     return {...todo, complete: !todo.index}
   }
   return todo
 }) 
}

 function newTodo(title){
  return {id: new Date(), title: title, complete: false}
 }
}


export const TodoProvider = ({children}) => {
const [todos, dispatchTodo] = useReducer(todoReducer, initState)


const valueTodos = {
 dispatchTodo, 
 todos
}
 return <TodoContext.Provider value={valueTodos}>{children}</TodoContext.Provider>
};

export const useTodoContext = () => useContext(TodoContext)