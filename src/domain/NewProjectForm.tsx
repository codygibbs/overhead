import { useState } from "react"
import InputGroup from "@Element/InputGroup"
import Button from "@Element/Button"
import { Project } from "@Type/project"

interface Props {
  onSubmit: (project: Project) => void
}

const NewProjectForm: React.FC<Props> = (props) => {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")

  const handleIdChange = (value: string) => {
    setId(value)
  }

  const handleTitleChange = (value: string) => {
    setTitle(value)
  }

  const handleCreateProject = () => {
    props.onSubmit({ id, title })
  }

  return (
    <form>
      <InputGroup
        id="input-project-id"
        label="Project ID"
        name="id"
        onChange={handleIdChange}
        type="text"
        value={id}
      />

      <InputGroup
        id="input-project-title"
        label="Project Title"
        name="title"
        onChange={handleTitleChange}
        type="text"
        value={title}
      />

      <Button onClick={handleCreateProject}>Create</Button>
    </form>
  )
}

export default NewProjectForm
