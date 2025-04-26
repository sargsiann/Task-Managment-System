export function dispatch({type, payload}) 
{
	switch (type) {
		case "ADD_TASK":
			return [...payload];
		case "REMOVE_TASK":
			return payload.filter(task => task.id !== payload.id);
		case "UPDATE_TASK":
			return payload.map(task => {
				if (task.id === payload.id) {
					return {...task, ...payload};
				}
				return task;
			});
		default:
			throw new Error(`Unknown action type: ${type}`);
	}
}