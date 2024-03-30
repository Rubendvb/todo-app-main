import { ITask } from '../../@types/tasks'
import './Card.css'

type CardProps = {
  itemQuantities: number
  tasks: ITask[]
}

export default function Card({ itemQuantities, tasks }: CardProps) {
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
          <span className="card__footer__span selected">All</span>
          <span className="card__footer__span">Active</span>
          <span className="card__footer__span">Completed</span>
        </div>
        <span className="card__footer__span clear">Clear Completed</span>
      </div>
    </main>
  )
}
