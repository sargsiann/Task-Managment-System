import { useState } from 'react'
import './App.css'
import { TaskContext } from './context'
import Column from './components/Column'

function App() {

  return (
    <>
        <TaskContext>
			<Column title="To Do" />
			<Column title="In Progress" />
			<Column title="Done" />
		</TaskContext>
    </>
  )
}

export default App
