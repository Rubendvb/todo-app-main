import { useState, FormEvent, ChangeEvent } from 'react'
import './Input.css'
import { InputProps } from '../../@types/input'

export default function Input({ setTasks }: InputProps) {
  const initialTask = {
    status: 'created',
    createdAd: new Date().toISOString(),
  }

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTasks = {
      ...initialTask,
      description: inputValue,
    }

    setTasks((oldTasks) => [...oldTasks, newTasks])

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
