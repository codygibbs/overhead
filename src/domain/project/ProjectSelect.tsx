import SelectGroup from "@Element/SelectGroup"
import { Project } from "@Type/project"

interface Props {
  onChange?: (project: Project) => void
  options: Project[]
}

const ProjectSelect: React.FC<Props> = (props) => {
  const handleChange = (value: string) => {
    if (props.onChange) {
      props.onChange(props.options.find( option => option.id === value ))
    }
  }

  const options = [
    { label: "", value: "" },
    ...props.options.map(p => ({ label: p.title, value: p.id }))
  ]

  return (
    <SelectGroup
      id="time-entry-project-id"
      label="Project"
      name="time-entry-project-id"
      onChange={handleChange}
      options={options}
    />
  )
}

export default ProjectSelect
