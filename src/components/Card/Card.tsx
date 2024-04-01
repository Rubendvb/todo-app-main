import { useEffect, useState, useRef } from 'react'
import { ITask } from '../../@types/tasks'

import Filters from '../Filters/Filters'

import Cross from '../../assets/images/icon-cross.svg'

import './Card.css'

export type Filter = '' | 'all' | 'active' | 'completed'

interface CardProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
  tasks: ITask[]
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
  filter: Filter
  itemQuantities: number
  setItemQuantities: React.Dispatch<React.SetStateAction<number>>
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export default function Card({
  itemQuantities,
  tasks,
  setTasks,
  setItemQuantities,
  selected,
  setSelected,
}: CardProps) {
  const [tasksFiltered, setTasksFiltered] = useState<ITask[]>([])

  const selectTaskStatus = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: 'completed',
        }
      } else {
        return task
      }
    })

    setTasks(newTasks)
  }

  const deletedTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => task.status !== 'completed')

    setTasks(newTasks)
    setItemQuantities(newTasks.length)
  }

  useEffect(() => {
    if (selected === 'active') {
      const tasksActive = tasks.filter((task) => task.status !== 'completed')

      setTasksFiltered(tasksActive)
      setItemQuantities(tasksActive.length)
    } else if (selected === 'completed') {
      const tasksCompleted = tasks.filter((task) => task.status === 'completed')

      setTasksFiltered(tasksCompleted)
      setItemQuantities(tasksCompleted.length)
    } else {
      setTasksFiltered(tasks)
      setItemQuantities(tasks.length)
    }
  }, [
    selected,
    tasks,
    setTasksFiltered,
    setItemQuantities,
    itemQuantities,
    selectTaskStatus,
  ])

  const dragTask = useRef<number>(0)
  const draggedOverTask = useRef<number>(0)

  function handleSort() {
    if (selected === 'all') {
      const tasksClone = [...tasks]

      const temp = tasksClone[dragTask.current]

      tasksClone[dragTask.current] = tasksClone[draggedOverTask.current]
      tasksClone[draggedOverTask.current] = temp
      setTasks(tasksClone)
    }
  }

  return (
    <main className="card">
      <ul>
        {tasks &&
          tasksFiltered.map((task, index) => (
            <li
              key={task.id}
              draggable={selected === 'all' ? true : false}
              onDragStart={() => (dragTask.current = index)}
              onDragEnter={() => (draggedOverTask.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <label onChange={() => selectTaskStatus(task.id)}>
                <input
                  type="checkbox"
                  name="checkbox"
                  id={`${task.id}`}
                  disabled={task.status === 'completed'}
                  checked={task.status === 'completed'}
                />
                <span>{task.description}</span>
              </label>

              <button onClick={() => deletedTask(task.id)}>
                <img src={Cross} alt="icon-cross" />
              </button>
            </li>
          ))}
      </ul>

      <div className="card__footer">
        <span className="card__footer__span">{itemQuantities} items left</span>

        <div className="card__footer__filters">
          <Filters selected={selected} setSelected={setSelected} />
        </div>

        <span
          className="card__footer__span clear"
          onClick={() => clearCompleted()}
        >
          Clear Completed
        </span>
      </div>
    </main>
  )
}
