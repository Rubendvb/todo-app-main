import { useEffect, useState } from 'react'

import Card, { Filter } from './components/Card/Card'
import Header from './components/Header/Header'
import Input from './components/Input/Input'

import { ITask } from './@types/tasks'

import './styles/App.css'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [itemQuantities, setItemQuantities] = useState(0)
  const [filter, setFilter] = useState<Filter>('')

  useEffect(() => {
    setItemQuantities(tasks.length)
  }, [tasks])

  return (
    <>
      <Header />

      <Input setTasks={setTasks} />

      <Card
        setTasks={setTasks}
        tasks={tasks}
        setFilter={setFilter}
        filter={filter}
        itemQuantities={itemQuantities}
      />

      <footer className="footer">
        <span>Drag and drop to reorder list</span>

        <div className="attribution">
          Challenge by {''}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Rubén</a>.
        </div>
      </footer>
    </>
  )
}

export default App
