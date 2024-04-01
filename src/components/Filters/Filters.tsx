import classNames from 'classnames'

import './Filters.css'

interface iFilters {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

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

export default function Filters({ selected, setSelected }: iFilters) {
  return (
    <>
      {optionsFilters.map((option) => (
        <span
          key={option.value}
          className={classNames({
            filter__span: true,
            selected: selected === option.value,
          })}
          onClick={() => {
            setSelected(option.value)
          }}
        >
          {option.name}
        </span>
      ))}
    </>
  )
}
