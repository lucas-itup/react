
import React, { useState } from 'react';
const FormTodo = props => {
	const [description, setDescription] = useState("");
	return (
	  <form>
		<div className="todo-list">
		  <div className="file-input">
			<input
			  type="text"
			  className="text"
			  value={description}
			  onChange={e => setDescription(e.target.value)}
			/>
			<button
			  className="button pink"
			  disabled={description ? "" : "disabled"}
			>
			  Add
			</button>
		  </div>
		</div>
	  </form>
	);
  };

  const FormTodo = props => {
	const [description, setDescription] = useState("");
	const handleSubmit = e => {
	  e.preventDefault();
	  conbsole.log(description);
	  setDescription("");
	};
	return (
	  <form onSubmit={handleSubmit}>
		// ...
	  </form>
	);
  };

export default FormTodo;