import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import Tecnologies from "@/components/Tecnologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { tecnologies, projects } from "@/data/data";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Portfólio - Brenno Araújo</title>
        <meta name="description" content="Desenvolvedor Backend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main id="home" className="container mx-auto px-6 py-12 pt-24 mt-12 scroll-mt-12">
        <About />
        
        <div className="space-y-16 max-w-6xl mx-auto lg:w-3/4">

          <Tecnologies tecnologies={tecnologies} />

          <Projects projects={projects} />

          <Contact />
        </div>
      </main>

      <footer className="p-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Brenno Araújo</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/brenno-araujo25" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/brenno-araujo25" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}