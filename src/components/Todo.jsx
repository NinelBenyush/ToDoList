import React, {useState, useEffect} from "react";
import { IoMdClose } from "react-icons/io";

function Todo(){
    const [todoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [desc, setDesc] = useState("");
    const [messsage, setMessage] = useState("");
   
  useEffect(() => {
    checkCurrentTime();
  }, []);
    
   const checkCurrentTime = () => {
     const date = new Date();
     const h = date.getHours();
     if (h > 6 && h< 12){
      setMessage("Good Morning");
     }
     else if( h>12 && h< 20){
      setMessage("Good Afternoon");
     }
     else {
      setMessage("Good Night");
     }

   }

    const handleTask = () => {
        if(newTask.trim() && desc.trim()){
            const newTaskObj = {
                id: todoList.length +1,
                text: newTask,
                desc:desc,
                done:false,
            };
            setToDoList([...todoList, newTaskObj]);
            setNewTask("");
            setDesc("");
        }
    }

    const handleRemove = (id) => {
      const newList = todoList.filter((task) => task.id !== id);
      setToDoList(newList);

    }

    return (
      <>
       <div class="px-4 py-5 my-4 text-center">
     <h1 class="display-5 fw-bold text-body-emphasis">{messsage}</h1>
        </div>


        <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div className="list-group">
        {todoList.map(task => (
          <label key={task.id} className="list-group-item d-flex gap-3">
            <input
              className="form-check-input flex-shrink-0"
              type="checkbox"
              checked={task.done}
              onChange={() =>
                setToDoList(todoList.map(t => t.id === task.id ? { ...t, done: !t.done } : t))
              }
              style={{ fontSize: '1.375em' }}
            />
            <span className="pt-1 form-checked-content">
              <div className=" pt-1 form-checked-content ms-3">
              <strong>{task.text}</strong> <br></br>
              {task.desc}
              </div>
              <small className="d-block text-body-secondary">
                <svg className="bi me-1" width="1em" height="1em">
                  <use href="#calendar-event" />
                </svg>
              </small>
            </span>
            <button className="btn btn-sm ms-5" onClick={() => handleRemove(task.id)} style={{ height: 'fit-content' }}><IoMdClose /></button>
          </label>
          
        ))}

<div className="list-group-item d-flex gap-3 bg-body-tertiary">

          <span className="pt-1 form-checked-content w-100">
            <input
              type="text"
              className="form-control"
              placeholder="Add new task..."
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Add description..."
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleTask}>
              Add Task
            </button>
            </span>
        </div>
        </div>
      </div>    
      </>  
    )
}

export default Todo;