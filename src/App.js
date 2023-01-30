import './App.css';
import { TodoForm } from './components/todoForm/TodoForm';
import { TodoList } from './components/todoList/TodoList';
import { TodoProvider } from './store/TodoProvider';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoForm/>
        <TodoList/>
      </TodoProvider>
      
    </div>
  );
}

export default App;
