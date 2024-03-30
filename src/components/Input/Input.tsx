import { useState, FormEvent, ChangeEvent } from 'react'
import './Input.css'

interface InputProps {
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Input({ setTasks }: InputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTasks((oldTasks) => [...oldTasks, inputValue])

    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="input__container">
      <span></span>
      <input
        className="input"
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}
