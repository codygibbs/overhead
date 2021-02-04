interface Props {
  fill?: boolean
  sharp?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      className={`${props.fill ? "w-full" : ""} ${props.sharp ? "" : "rounded-md"} inline-flex items-center px-4 py-2 justify-center border border-transparent text-sm font-medium shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
