import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="border-t border-gray-800">
            <div className="flex justify-center py-4">
                <Image
                    src="/logos/exanix-white.png"
                    alt="Exanix Logo"
                    width={60}
                    height={60}
                    unoptimized
                />
            </div>
            <div className="container mx-auto px-6 text-gray-500 text-center">
                <div className="flex justify-center gap-x-6 gap-y-2 flex-wrap mb-6">
                    <a href="https://www.instagram.com/exanix_official/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Mercado Livre</a>
                </div>
                <div className="text-sm space-y-1">
                    <p className="font-semibold">Exanix</p>
                    <p>CNPJ: 69.945.041/0001-82</p>
                </div>
                <p className="mt-6 text-xs">&copy; {new Date().getFullYear()} Exanix. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
