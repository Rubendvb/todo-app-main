import { useEffect, useState } from 'react'
import './Header.css'

const themes: { [number: string]: string } = {
  1: 'light',
  2: 'dark',
}

export default function Header() {
  const [theme, setTheme] = useState(true)
  const [numberTheme, setNumberTheme] = useState(1)

  const handleThemeChange = (theme: boolean) => {
    const newTheme = !theme

    setTheme(newTheme)
    setNumberTheme(newTheme ? 1 : 2)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme && themes[savedTheme]) {
      setNumberTheme(Number(savedTheme))
      setTheme(savedTheme === '1')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement

    root.setAttribute('data-theme', themes[numberTheme])

    localStorage.setItem('theme', themes[numberTheme])
  }, [numberTheme])

  return (
    <header className="header">
      <h1>Todo</h1>

      <button
        aria-label="Alterar tema"
        onClick={() => handleThemeChange(theme)}
      ></button>
    </header>
  )
}
