import { RocketLaunchIcon, EyeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
    return (
        <section id="sobre" className="py-20 md:py-28 scroll-mt-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-white">Sobre a <span className="gradient-text">Exanix</span></h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Nossa jornada é impulsionada pela paixão por tecnologia e pelo compromisso em entregar resultados que definem o futuro.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="prose prose-invert prose-lg text-center mx-auto">
                        <p>
                            A Exanix foi fundada sobre um pilar central: ser um <strong>parceiro tecnológico completo</strong>. Em um mercado fragmentado, oferecemos uma solução unificada que abrange desde a venda de componentes de alta performance até o desenvolvimento de software sob medida e suporte técnico especializado.
                        </p>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Card Missão */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-purple-900/50 flex items-center justify-center rounded-full">
                                <RocketLaunchIcon className="w-8 h-8 text-purple-300" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Missão</h3>
                        <p className="text-gray-400">
                            Simplificar e potencializar o dia a dia e os negócios dos nossos clientes através de soluções de tecnologia inovadoras e de alta qualidade.
                        </p>
                    </div>

                    {/* Card Visão */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-purple-900/50 flex items-center justify-center rounded-full">
                                <EyeIcon className="w-8 h-8 text-purple-300" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Visão</h3>
                        <p className="text-gray-400">
                            Ser a principal referência em soluções de tecnologia na região, reconhecida pela excelência, confiança e pelo portfólio completo e integrado.
                        </p>
                    </div>

                    {/* Card Valores */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-purple-900/50 flex items-center justify-center rounded-full">
                                <ShieldCheckIcon className="w-8 h-8 text-purple-300" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Valores</h3>
                        <ul className="list-none text-gray-400 space-y-1">
                            <li>Qualidade</li>
                            <li>Confiança</li>
                            <li>Inovação</li>
                            <li>Foco no Cliente</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
