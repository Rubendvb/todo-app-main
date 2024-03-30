import { useState } from 'react'
import classNames from 'classnames'

import { ITask } from '../../@types/tasks'

import Cross from '../../assets/images/icon-cross.svg'

import './Card.css'

const optionsFilters = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Active',
    value: 'active',
  },
  {
    name: 'Completed',
    value: 'completed',
  },
]

export type Filter = '' | 'all' | 'active' | 'completed'

interface CardProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
  tasks: ITask[]
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
  filter: Filter
  itemQuantities: number
}

export default function Card({ itemQuantities, tasks, setTasks }: CardProps) {
  const [selected, setSelected] = useState('all')

  const deletedTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <main className="card">
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input type="checkbox" name="checkbox" id={`${task.id}`} />
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
        <div>
          {optionsFilters.map((option) => (
            <span
              key={option.value}
              className={classNames({
                card__footer__span: true,
                selected: selected === option.value,
              })}
              onClick={() => {
                setSelected(option.value)
              }}
            >
              {option.name}
            </span>
          ))}
        </div>
        <span className="card__footer__span clear">Clear Completed</span>
      </div>
    </main>
  )
}
