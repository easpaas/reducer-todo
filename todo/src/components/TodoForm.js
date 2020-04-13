import React, { useState } from 'react';
import './styles.css';


function TodoForm() {
  const [formData, setFormData] = useState(" ");

  const handleChanges = e => {
    setFormData(e.target.value);
  }
  
  const handleClear = e => {
    e.preventDefault();
    // TODO dispatch action to clear all completed items
    console.log("dispatch action CLEAR_COMPLETED")
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormData(" ");

    console.log("dispatch action ADD_TODO")

    // TODO dispatch action to update todos
  
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text" 
            name="item"
            value={formData} 
            placeholder={'add item here...'}
            onChange={handleChanges}
          />
        <button className="btn add">Add item</button>
        <button 
          className="btn clear" 
          onClick={handleClear}
        >
          Clear completed
        </button>
      </form>
    </div>
  );
}

export default TodoForm;