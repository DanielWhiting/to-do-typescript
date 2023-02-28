import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css'
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todos){
      setTodos([...todos, {id: Date.now(), todo:todo, isDone: false}])
      setTodo("")
    }

  }

  console.log(todos)

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      {
        todos.map((test) => {
        <div>
          <p>test.todo</p>
        </div>
        })
      }


    </div>
  );
}

export default App;
