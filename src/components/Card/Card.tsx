import classNames from 'classnames'

import { ITask } from '../../@types/tasks'

import './Card.css'
import { useState } from 'react'

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
  itemQuantities: number
  tasks: ITask[]
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
  filter: Filter
}

export default function Card({ itemQuantities, tasks }: CardProps) {
  const [selected, setSelected] = useState('all')
  return (
    <main className="card">
      <ul>
        {tasks &&
          tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  id={`${task.createdAd}`}
                />
                <span>{task.description}</span>
              </label>
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
