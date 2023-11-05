const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function seedDatabase() {
  // Verificar se o projeto já existe
  const existingProject = await prisma.project.findUnique({
    where: {
      name: "Projeto de Exemplo",
    },
  })

  if (existingProject) {
    console.log("O projeto já existe, não foi criado novamente.")
  } else {
    // Criar um novo projeto
    const project = await prisma.project.create({
      data: {
        name: "Projeto de Exemplo",
      },
    })

    // Criar várias sessões associadas ao projeto
    const sessions = await prisma.session.createMany({
      data: [
        {
          name: "Sessão 1",
          projectId: project.id,
        },
        {
          name: "Sessão 2",
          projectId: project.id,
        },
        {
          name: "Sessão 3",
          projectId: project.id,
        },
      ],
    })

    // Criar várias tarefas associadas às sessões
    const tasks = await prisma.task.createMany({
      data: [
        {
          name: "Tarefa 1 da Sessão 1",
          status: "incomplete",
          sessionId: sessions[0].id,
        },
        {
          name: "Tarefa 2 da Sessão 1",
          status: "complete",
          sessionId: sessions[0].id,
        },
        {
          name: "Tarefa 1 da Sessão 2",
          status: "incomplete",
          sessionId: sessions[1].id,
        },
        {
          name: "Tarefa 1 da Sessão 3",
          status: "complete",
          sessionId: sessions[2].id,
        },
      ],
    })

    console.log("Dados de exemplo inseridos com sucesso.")
  }

  prisma.$disconnect()
}

seedDatabase().catch((error) => {
  console.error(error)
})
