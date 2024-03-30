import { useState, FormEvent, ChangeEvent } from 'react'
import { InputProps } from '../../@types/input'
import { v4 as uuidv4 } from 'uuid'

import './Input.css'

export default function Input({ setTasks }: InputProps) {
  const initialTask = {
    id: uuidv4(),
    status: 'created',
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
