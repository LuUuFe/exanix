export default function Footer() {
    return (
        <footer className="border-t border-gray-800">
            <div className="container mx-auto px-6 py-8 text-gray-500 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Mercado Livre</a>
                </div>
                <div className="text-sm">
                    <p>Exanix</p>
                    <p>CNPJ: 69.945.041/0001-82</p>
                </div>
                <p className="mt-6 text-xs">&copy; {new Date().getFullYear()} Exanix. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
