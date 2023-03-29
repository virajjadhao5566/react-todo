import './App.css';
import React,{useState} from 'react'

function App() {
  const [todoList,setTodoList] = useState([]);
  const [currentTask,setCurrentTask] = useState("")

  const addTask = () => {
    setTodoList([...todoList,currentTask])
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input 
        type="text" 
        placeholder='Enter Text'
        onChange={(event)=>{
          setCurrentTask(event.target.value)
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <hr/>
      <ul>
        {
          todoList.map((val,key) =>{
            return <li>{val}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
