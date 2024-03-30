import './Card.css'

export default function Card() {
  return (
    <main className="card">
      <ul>
        <li>
          <label>
            <input type="checkbox" name="checkbox" id="todo2" />
            <span>Enviar convites para a reunião de equipe</span>
          </label>
        </li>
      </ul>

      <div className="card__footer">
        <span className="card__footer__span">5 items left</span>
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
