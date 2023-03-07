import { useState } from 'react';
import axios from 'axios';

const AddTaskComp = ({onTaskCreated}:any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try 
    {
      await axios.post('http://127.0.0.1:8000/api/tasks', { title, description });
      onTaskCreated();
      setTitle("");
      setDescription("");
    } catch (error) 
    {
        console.error(error);
    }
};

return (
  <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          // rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Add Task
      </button>
    </form>
);
};

export default AddTaskComp;