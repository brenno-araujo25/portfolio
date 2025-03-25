import { IProject } from "@/components/Projects";

export const tecnologies = [
  "TypeScript",
  "JavaScript",
  "NestJS",
  "Next.js",
  "Node.js",
  "React",
  "Tailwind CSS",
  "Python",
  "Django",
  "Java",
  "Spring Boot",
  "Git",
  "GitHub",
  "Docker",
  "PostgreSQL",
  "MySQL",
  "Sequelize",
  "TypeORM",
  "Express",
  "Fastify",
  "FastAPI",
];

export const projects: IProject[] = [
    {
      name: "EcoTrilha",
      description: `EcoTrilha é um sistema para turismo ecológico desenvolvido como projeto acadêmico.
                    O sistema possui frontend em React e backend em Django.
                    Permite o cadastro de guias e aventureiros, onde os guias podem registrar trilhas com localização no mapa.
                    Possui uma interface intuitiva para visualização e agendamento de trilhas, 
                    além de um sistema de progressão com XP e níveis para incentivar o engajamento dos usuários.
                    `,
      url: "https://github.com/EcoTrilha/",
      tags: ["Python", "Django", "React", "Vite", "Tailwind CSS", "JavaScript"]
    },
    {
      name: "MeetSpace",
      description: `Sistema distribuído utilizando a arquitetura de microsserviços que gerencia reservas de salas de reunião.
                    Desenvolvido com Node.js, NestJS, Flask e PostgreSQL, com suporte de conteinerização com Docker.
                    Este sistema pode ser utilizado por empresas para organizar a reserva e uso de salas de reuniões em um escritório.`,
      url: "https://github.com/MeetSpaceUFRPE/meetspace-back",
      tags: ["Node.js", "NestJS", "Docker", "Microsserviços", "Python", "TypeScript", "JavaScript"]
    },
    {
      name: "Personal Finances API",
      description: `API RESTful desenvolvida com Spring Boot e PostgreSQL para gerenciar finanças pessoais.
                    Realiza rastreamento de receitas e despesas e relatórios financeiros.
                    Utiliza autenticação JWT para segurança;
                    JUnit e Mockito para testes unitários.
                    Tratamento de exceções e mapeamento utilizando MapStruct`,
      url: "https://github.com/brenno-araujo25/personal-finances-spring-boot",
      tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"]
    },
    {
      name: "Blog API",
      description: `API RESTful utilizando NestJS para gerenciar usuários, blogs, posts, comentários, curtidas e seguidores.
                    Utilizei autenticação e autorização baseadas em JWT.
                    Adotei padrões DTO (Data Transfer Objects) para validação de entradas.
      `,
      url: "https://github.com/brenno-araujo25/blog-api",
      tags: ["TypeScript", "NestJS", "JWT", "Docker"]
    },
    {
      name: "Task App API",
      description: `API RESTful desenvolvida em Node.js para gerenciamento de tarefas.
                    Utilizei PostgreSQL como banco de dados e Sequelize como ORM. 
                    Autenticação baseada em JWT e criptografia de senhas com bcrypt.
                    Ambiente de desenvolvimento conteinerizado utilizando Docker.`,
      url: "https://github.com/brenno-araujo25/task-app-api",
      tags: ["JavaScript", "Node.js", "PostgreSQL", "Sequelize", "Docker"]
    },
    {
      name: "ProMonitor",
      description: `Sistema Web para gestão das monitorias do Departamento de Computação,
                    permitindo a conexão entre professores e monitores de cada matéria.
                    Desenvolvido com Node.js, Express e MySQL, com suporte de conteinerização com Docker`,
      url: "https://github.com/HidraCode/ProMonitorBack",
      tags: ["Node.js", "Express", "MySQL", "Docker"]
    },
];
