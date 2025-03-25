import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const navItens = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
    { label: <BsGithub size={24} />, href: "https://github.com/brenno-araujo25", target: "_blank" },
];

export default function Header() {
    return (
        <header className="p-6 fixed top-0 left-0 w-full bg-gray-900 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-6">
                        {navItens.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} target={item.target}>
                                    <p className="hover:text-teal-500">{item.label}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}