import { Project } from "@Type/project"
import { NextApiRequest, NextApiResponse } from "next"
import Knex from "knex"

const db = Knex({
  client: "sqlite3",
  connection: {
    filename: process.env.DB_FILE,
  },
})

type Data = {
  projects: Project[]
} | {
  message: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
    case "GET":
      await listProjects(req, res)
      break
    
    case "POST":
      await createProject(req, res)
      break
    
    default:
      res.status(404).end()
  }
}

async function listProjects(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const q = await db("projects").select("id", "title")

    res.status(200).json({ projects: q })
  } catch (e) {
    console.error(e)

    res.status(500).json({
      message: "Could not retrieve projects.",
    })
  }
}

async function createProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const project: Project = req.body
    await db("projects").insert({ id: project.id, title: project.title })

    res.status(200).json({
      message: "Project created.",
    })
  } catch (e) {
    console.error(e)

    res.status(500).json({
      message: "Could not save project.",
    })
  }
}
