import Button from "@Element/Button"
import InputGroup from "@Element/InputGroup"
import SelectGroup from "@Element/SelectGroup"
import { Project } from "@Type/project"
import Slideover from "@Element/Slideover"
import NewProjectForm from "@Domain/NewProjectForm"
import { useEffect, useState } from "react"

interface Props {

}

const NewTimeEntryForm: React.FC<Props> = (props) => {
  const [timerRunning, setTimerRunning] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [showProjectForm, setShowProjectForm] = useState<boolean>(true)

  useEffect(() => {
    const projectSrc = localStorage.getItem("projects")

    let projects: Project[] = []
    if (projectSrc !== null) {
      projects = JSON.parse(projectSrc)
    }

    setProjects(projects)
  }, [])

  const handleCloseProjectForm = () => {
    setShowProjectForm(false)
  }

  const handleCreateProject = (project: Project) => {
    console.log("Created: ", { project })

    const projectSrc = localStorage.getItem("projects")

    let projects: Project[] = []
    if (projectSrc !== null) {
      projects = JSON.parse(projectSrc) as Project[]
    }

    projects.push(project)
    localStorage.setItem("projects", JSON.stringify(projects))
  }

  const handleOpenProjectForm = () => {
    setShowProjectForm(true)
  }


  const handleTimerToggle = () => {
    setTimerRunning((running) => !running)
  }

  return (
    <div className="col-span-1 bg-white rounded shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <InputGroup
          id="time-entry-task"
          label="Task"
          name="time-entry-task"
          placeholder="Eating an apple"
          type="text"
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <SelectGroup
              id="time-entry-project-id"
              label="Project"
              name="time-entry-project-id"
              options={projects.reduce((s, p) => {
                return Object.assign(s, { [p.id]: p.title })
              }, {})}
            />

            <Button onClick={handleOpenProjectForm}>
              Show Projects
            </Button>

            <Slideover show={showProjectForm} onClose={handleCloseProjectForm} title="Add Project">
              <NewProjectForm onSubmit={handleCreateProject} />
            </Slideover>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <Button fill sharp onClick={handleTimerToggle}>
              {timerRunning ? "Stop" : "Start"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTimeEntryForm
