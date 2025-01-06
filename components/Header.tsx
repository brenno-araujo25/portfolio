import Link from "next/link";

const navItens = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
];

export default function Header() {
    return (
        <header className="p-6">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-6">
                        {navItens.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>
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