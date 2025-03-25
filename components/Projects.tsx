export type IProject = {
    name: string;
    description: string;
    url: string;
    tags: string[];
};

export default function Projects({ projects }: { projects: IProject[] }) {
    return (
        <section id="projects" className="mt-12 scroll-mt-24">
            <h3 className="text-3xl font-bold mb-4">Projetos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.name} className="bg-gray-800 p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
                        <h4 className="text-2xl font-bold mb-4">{project.name}</h4>
                        <p className="text-gray-400 mb-5">{project.description}</p>
                        <ul className="flex flex-wrap mb-4 gap-1">
                            {project.tags.map((tag) => (
                                <li key={tag} className="bg-gray-700 text-white px-4 py-1 rounded-full mr-2 mb-2 text-sm">{tag}</li>
                            ))}
                        </ul>
                        <a 
                            href={project.url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-teal-400 hover:bg-teal-500 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
                        >
                            Ver Projeto
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
