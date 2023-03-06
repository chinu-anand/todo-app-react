import './App.css';
import TaskForm from "./TaskForm";
import Task from "./Task";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);

    function addTask(name) {
        setTasks(prevState => {
            return [...prevState, {name:name,done:false}];
        });
    }
    return (
    <main>
      <TaskForm onAdd={addTask}/>
        {tasks.map(task=>{
            return <Task name={task.name} done={task.done}/>
        })}
    </main>
  );
}

export default App;
