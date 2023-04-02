import './App.css';
import React,{useState,useRef} from 'react'

function App() {
  const [todoList,setTodoList] = useState([]);
  const [currentTask,setCurrentTask] = useState("")
  const inputTask = useRef(null)
  const addTask = () => {
    setTodoList([...todoList,{task:currentTask,completed:false}])
    inputTask.current.value = ""
    setCurrentTask("")
  }
  const deleteTask = (toDelete) =>{
    setTodoList(
      todoList.filter((task) =>{
        return task.task !== toDelete
      })
    )
  }
  const completeTask = (toComplete) =>{
    setTodoList(
      todoList.map((task) =>{
        return task.task === toComplete 
        ? {task : toComplete, completed:true}
        : {task : task.task, completed:task.completed? true : false}
      })
    )
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input 
        ref={inputTask}
        type="text" 
        placeholder='Enter Text'
        onKeyDown={(event)=>{
          if(event.keyCode === 13){
            addTask()
          }
        }}
        onChange={(event)=>{
          setCurrentTask(event.target.value)
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <hr/>
      <ul>
        {
          todoList.map((val,key) =>{
            return(
              <div className='task'>
                <li key = 'key'>{val.task}</li>
                <button onClick={()=>
                  completeTask(val.task)}
                >Complete</button>
                <button onClick={()=>
                  deleteTask(val.task)}
                >X</button>
                {
                  val.completed?(<h1>Task Complete</h1>):(<h1>Task Not Complete</h1>)
                }
              </div>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
