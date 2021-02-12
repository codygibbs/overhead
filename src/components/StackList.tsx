import { ReactNode } from "react"

interface Props<T> {
  items: T[]
  template: (item: T) => ReactNode
}

const StackList = <ListItem extends React.ReactNode>(props: Props<ListItem>) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {props.items.map((item, i) => (
          <li key={i}>
            {props.template(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StackList
