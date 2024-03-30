import Card from './components/Card/Card'
import Input from './components/Input/Input'

import './styles/App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>Todo</h1>
      </header>

      <Input />

      <Card />

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
