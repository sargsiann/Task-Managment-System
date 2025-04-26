import { Context } from "../context";
import { useContext } from "react";

function Column({title}) 
{
	const {tasks, reducer} = useContext(Context);

	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{tasks.filter(task => task.status === title).map(task => (
					<li key={task.id}>
						<h3>{task.title}</h3>
						<p>{task.description}</p>
						<p>{task.status}</p>
					</li>
				))}
			</ul>			
		</div>
	)
}

export default Column;