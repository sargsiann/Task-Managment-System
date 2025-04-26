import { useState } from 'react'
import './App.css'
import { TaskContext } from './context'
import Column from './components/Column'

function App() {

  return (
    <>
        <TaskContext>
			<div className="App">
				<div className="columns">
					<Column status="To Do" />
					<Column status="In Progress" />
					<Column status="Done" />
					<Column status="Blocked" />
				</div>
			</div>
		</TaskContext>
    </>
  )
}

export default App
