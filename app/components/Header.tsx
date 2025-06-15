"use client"; // Componente agora precisa de estado para o menu

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#solucoes', label: 'Soluções' },
        { href: '#mercado', label: 'Mercado' },
        { href: '#parcerias', label: 'Parcerias' },
        { href: '#sobre', label: 'Sobre' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <header className="bg-black/50 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-800">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logos/exanix-white.png" alt="Exanix Logo" width={40} height={40} unoptimized />
                    <h1 className="text-2xl font-extrabold text-white">Exanix</h1>
                </Link>

                {/* Navegação para Desktop */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white font-medium transition-colors duration-300">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Botão do Menu para Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none p-2" aria-label="Abrir menu">
                        {isMenuOpen ? (
                            <XMarkIcon className="h-7 w-7" />
                        ) : (
                            <Bars3Icon className="h-7 w-7" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Menu Mobile */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen border-t border-gray-800' : 'max-h-0'}`}
            >
                <div className="flex flex-col px-4 pb-4 pt-2 space-y-1">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar num link
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
