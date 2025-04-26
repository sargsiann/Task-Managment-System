import { Context } from "../context";
import { useContext } from "react";
import "../App.css";

function Column({status}) 
{
	const {tasks, reducer} = useContext(Context);

	return (
		<div className="column">
  			<h2 className="column-title">{status}</h2>
  			<ul className="task-list">
	  			{tasks.filter((i) => i.status === status).map(task => (
  			    	<li key={task.id} className="task-card">
  			    	  <h3 className="task-title">{task.title}</h3>
  			    	  <p className="task-description">{task.description}</p>
  			    	  <div className="task-footer">
  			    	    <span className="task-status">{task.status}</span>
  			    	    <span className="task-priority">Priority: {task.priority}</span>
  			    	  </div>
  			    	  <div className="button-group">
  			    	    <button className="button-delete">Delete</button>
  			    	    <button className="button-edit">Edit</button>
  			    	  </div>
  			    	</li>
  			  ))}					
  			</ul>
		</div>
	)
}

export default Column;