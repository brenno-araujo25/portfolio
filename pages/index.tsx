import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import Tecnologies from "@/components/Tecnologies";
import Projects from "@/components/Projects";
import { Project } from "@/components/Projects";
import Contact from "@/components/Contact";

const tecnologies = [
  "TypeScript",
  "JavaScript",
  "NestJS",
  "Next.js",
  "Node.js",
  "React",
  "Tailwind CSS",
  "Python",
  "Git",
  "GitHub",
  "Docker",
  "PostgreSQL",
  "MySQL",
  "Sequelize",
  "TypeORM",
  "Express",
  "Fastify",
  "FastAPI"
];

const projects: Project[] = [
  {
    name: "MeetSpace",
    description: `Sistema distribuído utilizando a arquitetura de microsserviços que gerencia reservas de salas de reunião.
                  Desenvolvido com Node.js, NestJS, Flask e PostgreSQL, com suporte de conteinerização com Docker.
                  Este sistema pode ser utilizado por empresas para organizar a reserva e uso de salas de reuniões em um escritório.`,
    url: "https://github.com/brenno-araujo25/reserva-salas",
    tags: ["Node.js", "NestJS", "Flask", "PostgreSQL", "Docker", "Microsserviços", "Python", "TypeScript", "JavaScript"]
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

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Portfólio - Brenno Araújo</title>
        <meta name="description" content="Desenvolvedor Backend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className="container mx-auto px-6 py-12">
        <section className="text-center h-70 flex flex-col justify-center items-center">
          <img
            src="/profile.jpeg"
            alt="Foto de perfil"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-3xl font-bold mb-4">Brenno Araújo</h2>
          <p className="text-lg text-gray-400 mb-8">Desenvolvedor Backend e Estudante de Ciência da Computação</p>
          <a href="#projects" className="bg-teal-400 hover:bg-teal-500 text-black px-6 py-2 rounded">Veja meus projetos</a>
        </section>
        
        <About />

        <Tecnologies tecnologies={tecnologies} />

        <Projects projects={projects} />

        <Contact />
      </main>

      <footer className="p-6 text-center">
        <p className="text-gray-400 text-sm">&copy; 2025 Brenno. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}