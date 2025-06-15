import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-black/50 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-800">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex flex-col justify-around">
                        <Image src="/logos/exanix-white.png" alt="Exanix Logo" width={60} height={40} />
                    </div>
                    <h1 className="text-2xl font-extrabold text-white">Exanix</h1>
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link href="#solucoes" className="text-gray-400 hover:text-white font-medium transition-colors duration-300">
                        Soluções
                    </Link>
                    <Link href="#mercado" className="text-gray-400 hover:text-white font-medium transition-colors duration-300">
                        Mercado
                    </Link>
                    <Link href="#sobre" className="text-gray-400 hover:text-white font-medium transition-colors duration-300">
                        Sobre
                    </Link>
                    <Link href="#contato" className="text-gray-400 hover:text-white font-medium transition-colors duration-300">
                        Contato
                    </Link>
                </div>
            </nav>
        </header>
    );
}
