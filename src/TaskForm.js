import {useState} from "react";

export default function TaskForm({onAdd}){
    const [ TaskName, setTaskName] = useState('');

    function handleSubmit(ev) {
        ev.preventDefault();
        onAdd(TaskName);
        setTaskName('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input type="text"
                   value={TaskName}
                   onChange={event => setTaskName(event.target.value)}
                   placeholder="Your next task..."
            />
        </form>
    );
}