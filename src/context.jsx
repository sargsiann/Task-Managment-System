import { createContext, useContext, useReducer } from "react";

let Context = createContext();


export function TaskContext({children}) {
	const [reducer, tasks] = useReducer(dispatch,[]);

	return (
		<Context value={{reducer, tasks}}>
			{children}
		</Context>
	)
}