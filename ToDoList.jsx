import React, {useState} from "react"
function ToDOList(){
    const [tasks, setTasks] = useState(["eat breackfast", "take a shower", "lunch", "office"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }


    

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !==index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
 
    }
    return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="enter a task..."
            value={newTask}
            onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask} >
              
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
            <li key = {index}>
                <span className="text">{task}
                    <button className="delete-task" onClick={() =>deleteTask(index)}>
                        Delete
                    </button>
                     <button className="move-up" onClick={() =>moveTaskUp(index)}>
                        move Up
                    </button>
                    <button className="move-down" onClick={() =>moveTaskDown(index)}>
                        move Down
                    </button>
                </span>
            </li>)}
        </ol>
    </div>)
}
export default ToDOList