import { ChangeEvent, useState } from "react"

interface Props {
  id: string
  label: string
  name: string
  onChange?: (value: string) => void
  placeholder?: string
  type: "email" | "text"
  value?: string
}

const InputGroup: React.FC<Props> = (props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value)
    }
  }

  return (
    <div className="w-full">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">{props.label}</label>
      <div className="mt-1">
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          onChange={handleChange}
          placeholder={props.placeholder}
          value={props.value}
        />
      </div>
    </div>
  )
}

export default InputGroup
