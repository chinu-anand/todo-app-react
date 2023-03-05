import {useState} from "react";

export default function TaskForm(){
    const [ TaskName, setTaskName] = useState('');
    return(
    <form>
            <button>+</button>
            <input type="text"
                   value={TaskName}
                   onChange={event => setTaskName(event.target.value)}
                   placeholder="Your next task..."
            />
        </form>
    );
}