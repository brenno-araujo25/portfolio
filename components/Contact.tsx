export default function Contact() {
    return (
        <section id="contact" className="mt-12">
          <h3 className="text-3xl font-bold mb-4">Contato</h3>
          <p className="text-gray-400 mb-4">
            Me contate pelo e-mail ou conecte-se comigo através das plataformas abaixo.
          </p>
          <ul>
            <li><a href="mailto:brennocaldeira@outlook.com" className="text-teal-400 hover:underline">brennocaldeira@outlook.com</a></li>
            <li><a href="https://github.com/brenno-araujo25" className="text-teal-400 hover:underline">GitHub</a></li>
            <li><a href="https://linkedin.com/in/brenno-araujo25" className="text-teal-400 hover:underline">LinkedIn</a></li>
          </ul>
        </section>
    );
}