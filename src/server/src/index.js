const express = require("express")
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

// Rota para criar um novo projeto
app.post("/projects", async (req, res) => {
  try {
    const { name } = req.body
    const project = await prisma.project.create({
      data: {
        name,
      },
    })
    res.json(project)
  } catch (error) {
    console.error(error)
    res.status(500).send("Erro ao criar um projeto.")
  }
})

// Rota para listar todos os projetos
app.get("/projects", async (req, res) => {
  const projects = await prisma.project.findMany()
  res.json(projects)
})

// Rota para criar uma nova sessão em um projeto
app.post("/projects/:projectId/sessions", async (req, res) => {
  try {
    const { name } = req.body
    const { projectId } = req.params
    const session = await prisma.session.create({
      data: {
        name,
        projectId: parseInt(projectId),
      },
    })
    res.json(session)
  } catch (error) {
    console.error(error)
    res.status(500).send("Erro ao criar uma sessão.")
  }
})

// Rota para listar todas as sessões de um projeto
app.get("/projects/:projectId/sessions", async (req, res) => {
  const { projectId } = req.params
  const sessions = await prisma.session.findMany({
    where: {
      projectId: parseInt(projectId),
    },
  })
  res.json(sessions)
})

// Rota para criar uma nova tarefa em uma sessão
app.post("/sessions/:sessionId/tasks", async (req, res) => {
  try {
    const { name, status } = req.body
    const { sessionId } = req.params
    const task = await prisma.task.create({
      data: {
        name,
        status,
        sessionId: parseInt(sessionId),
      },
    })
    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500).send("Erro ao criar uma tarefa.")
  }
})

// Rota para listar todas as tarefas de uma sessão
app.get("/sessions/:sessionId/tasks", async (req, res) => {
  const { sessionId } = req.params
  const tasks = await prisma.task.findMany({
    where: {
      sessionId: parseInt(sessionId),
    },
  })
  res.json(tasks)
})

// Rota para excluir um projeto e suas sessões e tarefas relacionadas
app.delete("/projects/:projectId", async (req, res) => {
  const { projectId } = req.params
  await prisma.session.deleteMany({
    where: {
      projectId: parseInt(projectId),
    },
  })
  await prisma.project.delete({
    where: {
      id: parseInt(projectId),
    },
  })
  res.send("Projeto, sessões e tarefas relacionadas excluídos com sucesso.")
})

// Rota para excluir uma sessão e suas tarefas relacionadas
app.delete("/sessions/:sessionId", async (req, res) => {
  const { sessionId } = req.params
  await prisma.task.deleteMany({
    where: {
      sessionId: parseInt(sessionId),
    },
  })
  await prisma.session.delete({
    where: {
      id: parseInt(sessionId),
    },
  })
  res.send("Sessão e tarefas relacionadas excluídas com sucesso.")
})

// Rota para excluir uma tarefa
app.delete("/tasks/:taskId", async (req, res) => {
  const { taskId } = req.params
  await prisma.task.delete({
    where: {
      id: parseInt(taskId),
    },
  })
  res.send("Tarefa excluída com sucesso.")
})

app.listen(3000, () => {
  console.log("Servidor Express rodando na porta 3000")
})
