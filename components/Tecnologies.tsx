import { JSX } from "react";
import { SiJavascript, SiNestjs, SiSequelize, SiTypeorm, SiExpress, SiFastapi, SiFastify, SiDjango } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs, FaReact, FaPython, FaGitAlt, FaGithub, FaDocker, FaJava } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

const iconMap: { [key: string]: JSX.Element } = {
    JavaScript: <SiJavascript />,
    TypeScript: <BiLogoTypescript />,
    "Node.js": <FaNodeJs />,
    "Next.js": <RiNextjsFill />,
    React: <FaReact />,
    NestJS: <SiNestjs />,
    Java: <FaJava />,
    "Spring Boot": <BiLogoSpringBoot />,
    Python: <FaPython />,
    Django: <SiDjango />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Docker: <FaDocker />,
    PostgreSQL: <BiLogoPostgresql />,
    MySQL: <GrMysql />,
    Sequelize: <SiSequelize />,
    TypeORM: <SiTypeorm />,
    Express: <SiExpress />,
    Fastify: <SiFastify />,
    FastAPI: <SiFastapi />,
    "Tailwind CSS": <RiTailwindCssFill />,
};
    

const Tecnologies = ({ tecnologies }: { tecnologies: string[] }) => {
    return (
        <div className="mt-12 scroll-mt-24">
            <h1 className="text-3xl font-bold mb-6">Tecnologias</h1>
            <ul className="flex flex-wrap justify-center lg:gap-1">
                {tecnologies.map((tecnology) => (
                    <li
                        key={tecnology}
                        className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full mr-2 mb-2"
                    >
                        {iconMap[tecnology] && (
                        <span className="mr-2 text-xl">{iconMap[tecnology]}</span>
                        )}
                        {tecnology}
                  </li>
                ))}
            </ul>
        </div>
    )
}

export default Tecnologies;