import Image from 'next/image';

const partnerBrands = [
    { name: 'ThunderX3', logoSrc: '/logos/thunderx3.png' },
    { name: 'Fortrek', logoSrc: '/logos/fortrek.png' },
    { name: 'AEROCOOL', logoSrc: '/logos/aerocool.png' },
    { name: 'C3TECH', logoSrc: '/logos/c3tech.png' },
    { name: 'STREAMPLIFY', logoSrc: '/logos/streamplify.png' },
    { name: 'HP', logoSrc: '/logos/hp.png' },
    { name: 'BENQ', logoSrc: '/logos/benq.png' },
    { name: 'MULTILASER', logoSrc: '/logos/multilaser.png' },
    { name: 'XIAOMI', logoSrc: '/logos/xiaomi.png' },
    { name: 'LOGITECH', logoSrc: '/logos/logitech.png' },
    { name: 'JBL', logoSrc: '/logos/jbl.png' },
    { name: 'YAMAHA', logoSrc: '/logos/yamaha.png' },
];

export default function PartnershipsSection() {
    return (
        <section id="parcerias" className="py-20 md:py-28 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-white">Parceiros <span className="gradient-text">Estratégicos</span></h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Trabalhamos com os melhores fornecedores e marcas do mercado para garantir a qualidade e a performance dos produtos que oferecemos.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Fornecedor Principal */}
                    <div className="mb-16">
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 text-center mb-4">Fornecedor Principal</h3>
                        <div className="bg-white/5 p-8 h-40 rounded-2xl flex items-center justify-center border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 group">
                            <Image
                                src="/logos/hayamax.svg"
                                alt="Logótipo da HAYAMAX"
                                width={250}
                                height={80}
                                className="object-contain filter grayscale opacity-60"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Outras Marcas */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 text-center mb-4">Marcas em Destaque</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {partnerBrands.map((brand) => (
                                <div key={brand.name} className="bg-white/5 p-6 h-32 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 group">
                                    <Image
                                        src={brand.logoSrc}
                                        alt={`${brand.name} logo`}
                                        width={120}
                                        height={40}
                                        className="object-contain filter grayscale opacity-60"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
