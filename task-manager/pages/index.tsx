import AddTaskComp from './components/AddTaskComp';
import EditTaskComp from './components/EditTaskComp';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
   const [editingTask, setEditingTask] = useState(null);
    const handleTasksUpdated = async () => {
    await getTasks();
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/tasks");
    setTasks(response.data);
  };

  const deleteTask = async (id:any) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`);
    getTasks();
  };


  const moveTask = async (id:any, status:any) => {
    await axios.put(`http://127.0.0.1:8000/api/tasks/${id}/status`, { status });
    getTasks();
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">Simple Task Management</h1>
      {editingTask != null ? editingTask && (
        <EditTaskComp
          task={editingTask}
          onTaskUpdated={() => {
            setEditingTask(null);
            getTasks();
          }}
        />
        ) : 
       <><AddTaskComp onTaskCreated={handleTasksUpdated} /><br /></>
      }
      <div className="row">
        <div className="col">
          <h2 className="text-center">To Do</h2>
          {tasks
            .filter((task:any) => task.status === "todo")
            .map((task:any) => (
              <div key={task.id} className="card my-3">
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => moveTask(task.id, "in_progress")}
                  >
                    Start
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary m-2"
                    onClick={() => setEditingTask(task)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="col">
          <h2 className="text-center">In Progress</h2>
          {tasks
            .filter((task:any) => task.status === "in_progress")
            .map((task:any) => (
              <div key={task.id} className="card my-3">
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <button
                    className="btn btn-success m-2"
                    onClick={() => moveTask(task.id, "done")}
                  >
                    Complete
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary m-2"
                    onClick={() => setEditingTask(task)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="col">
          <h2 className="text-center">Done</h2>
          {tasks
            .filter((task:any) => task.status === "done")
            .map((task:any) => (
              <div key={task.id} className="card my-3">
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary m-2"
                    onClick={() => setEditingTask(task)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
}