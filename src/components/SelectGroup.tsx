import { ChangeEvent } from "react"

interface Props {
  id: string
  label: string
  name: string
  onChange?: (value: string) => void
  options: Record<string, string>
}

const SelectGroup: React.FC<Props> = (props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value)
    }
  }

  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">{props.label}</label>
      <select
        id={props.id}
        name={props.name}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {Object.keys(props.options).map((label, value) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectGroup
