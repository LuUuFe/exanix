import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <section className="py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Tecnologia que <br />
          <span className="gradient-text">Transforma o Futuro.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          A Exanix une a venda de produtos de alta performance com serviços de desenvolvimento e suporte de TI, criando um ecossistema tecnológico completo para você e sua empresa.
        </p>
        <Link
          href="#solucoes"
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
        >
          Explore Nossas Soluções
        </Link>
      </section>
    </div>
  );
}