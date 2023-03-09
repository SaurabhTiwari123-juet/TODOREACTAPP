/** @format */

import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
	const [taskValue, setTaskValue] = useState("");
	const [progress, setProgress] = useState(false);
	const handleChange = (event) => {
		setTaskValue(event.target.value);
	};

	const handleReset = () => {
		setTaskValue("");
	};
	//
	const handleSubmit = (event) => {
		event.preventDefault();

		const task = {
			id: Math.floor(Math.random() * 1000),
			name: taskValue,
			completed: Boolean(progress),
		};
		setTasks([...tasks, task]);
		handleReset();
	};

	return (
		<section className='addtask'>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setTaskValue(e.target.value)}
					type='text'
					name='task'
					id='task'
					placeholder='Task Name'
					autoComplete='off'
					value={taskValue}
				/>
				<select
					onChange={(event) => setProgress(event.target.value)}
					value={progress}>
					<option value='false'>Pending</option>
					<option value=''>Completed</option>
				</select>
				<span onClick={handleReset} className='reset'>
					Reset
				</span>
				<button type='submit'>Add Task</button>
			</form>
			<p>{taskValue.length}</p>
		</section>
	);
};
// Todo REACT APP
// helps us for better understanding
