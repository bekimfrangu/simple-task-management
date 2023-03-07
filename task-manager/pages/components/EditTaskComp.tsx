import { useState } from 'react';
import axios from 'axios';

const EditTaskComp = ({task, onTaskUpdated}:any) => {
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try 
    {
      await axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}`, { title, description });
      onTaskUpdated();
    } catch (error) 
    {
        console.error(error);
    }
}
  
const handleCancel = () => {
      onTaskUpdated();
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
      <button type="submit" className="btn btn-primary m-2">
        Edit
      </button>
      <button type="button" className="btn btn-danger m-2" onClick={() => handleCancel()}>
        Cancel
      </button>
    </form>
);
};

export default EditTaskComp;