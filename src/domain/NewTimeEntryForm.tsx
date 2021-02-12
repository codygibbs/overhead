import Button from "@Element/Button"
import InputGroup from "@Element/InputGroup"
import { Project } from "@Type/project"
import Slideover from "@Element/Slideover"
import NewProjectForm from "@Domain/NewProjectForm"
import { useState } from "react"
import useSWR from "swr"
import ProjectSelect from "./project/ProjectSelect"

interface Props {

}

const NewTimeEntryForm: React.FC<Props> = (props) => {
  const [timerRunning, setTimerRunning] = useState(false)
  const [showProjectForm, setShowProjectForm] = useState<boolean>(false)

  const { data, mutate } = useSWR("/api/projects", projectListFetcher)

  const handleCloseProjectForm = () => {
    setShowProjectForm(false)
  }

  const handleCreateProject = async (project: Project) => {
    console.log("Created: ", { project })

    try {
      await projectCreationFetcher("/api/projects", project)
      mutate()
    } catch (e) {
      console.error({ e })
    }
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
        <div className="grid grid-cols-5 gap-4 w-full">
          <div className="col-span-3">
            <InputGroup
              id="time-entry-task"
              label="Task"
              name="time-entry-task"
              placeholder="Eating an apple"
              type="text"
            />
          </div>
          <div className="col-span-2 flex">
            <div className="flex-grow pr-4">
              {!data ? <span>Loading projects...</span> : (
                <ProjectSelect options={data.projects} />
              )}
            </div>
            <div className="pt-6">
              <Button onClick={handleOpenProjectForm}>
                Show Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="-ml-px w-0 flex-1 flex justify-end">
            <Button sharp onClick={handleTimerToggle}>
              {timerRunning ? "Stop" : "Start"}
            </Button>
          </div>
        </div>
      </div>
      <Slideover show={showProjectForm} onClose={handleCloseProjectForm} title="Add Project">
        <NewProjectForm onSubmit={handleCreateProject} />
      </Slideover>
    </div>
  )
}

const projectCreationFetcher = async (url: string, project: Project): Promise<{ message: string }> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })

  if (res.status !== 200) {
    throw new Error("Could not post project.")
  }
  
  return res.json()
}

const projectListFetcher = async (url: string): Promise<{ projects: Project[] }> => {
  const res = await fetch(url)

  if (res.status !== 200) {
    throw new Error("Could not fetch projects.")
  }

  return res.json()
}

export default NewTimeEntryForm
