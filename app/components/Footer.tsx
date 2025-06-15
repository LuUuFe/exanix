const Footer = () => {
    return (
        <footer className="border-t border-gray-800 mt-28">
            <div className="container mx-auto px-6 py-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Exanix. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;