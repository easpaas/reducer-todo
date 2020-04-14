import React, { useState } from 'react';
import './styles.css';


function TodoForm(props) {
  const [formData, setFormData] = useState(" ");

  const handleChanges = e => {
    setFormData(e.target.value);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    props.add(e, formData);
    setFormData(" ");
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
          onClick={(e) => {props.clear(e)}}
        >
          Clear completed
        </button>
      </form>
    </div>
  );
}

export default TodoForm;