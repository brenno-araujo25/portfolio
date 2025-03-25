export default function About() {
    return (
        <section id="home" className="flex items-center bg-gray-900 text-white md:mt-12">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center px-6 gap-12">
                <img
                    src="/profile.png"
                    alt="Foto de perfil"
                    className="w-48 h-48 rounded-full shadow-lg md:w-64 md:h-64"
                />

                <div className="text-gray-400 leading-relaxed text-left">
                    <h1 className="text-4xl font-bold mb-6 text-white">Brenno Araújo</h1>
                        <p className="mb-4">
                            Sou desenvolvedor backend com experiência em metodologias ágeis, desenvolvimento web e tecnologias como <span className="text-teal-400 font-semibold">Node.js</span>, <span className="text-teal-400 font-semibold">TypeScript</span>, <span className="text-teal-400 font-semibold">Spring Boot</span> e <span className="text-teal-400 font-semibold">NestJS</span>.
                        </p>
                        <p className="mb-4">
                            Atualmente, estou cursando o quinto período de Ciência da Computação na UFRPE e busco continuamente aprender e aplicar novas tecnologias.
                        </p>
                        <p>
                            Tenho experiência no desenvolvimento de APIs RESTful, versionamento de código com <span className="text-teal-400 font-semibold">Git/GitHub</span> e conteinerização com <span className="text-teal-400 font-semibold">Docker</span>. Estou sempre explorando novas tecnologias, pois acredito que a busca constante por aprendizado é essencial para o crescimento profissional.
                        </p>
                    </div>
            </div>
        </section>
    );
}