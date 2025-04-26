import { createContext, useReducer } from "react";
import { dispatch } from "./reducer";

export const Context = createContext();


export function TaskContext({children}) {
	const [tasks, reducer] = useReducer(dispatch,[
		{
			id: 1,
			title: "Task 1",
			description: "Description for Task 1",
			status: "To Do"
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description for Task 2",
			status: "In Progress"
		},
		{
			id: 3,
			title: "Task 3",
			description: "Description for Task 3",
			status: "Done"
		}
	]);

	return (
		<Context.Provider value={{reducer, tasks}}>
			{children}
		</Context.Provider>
	)
}