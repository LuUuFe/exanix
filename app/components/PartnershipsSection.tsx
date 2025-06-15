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

                <div className="max-w-4xl mx-auto">
                    {/* Fornecedor Principal */}
                    <div className="mb-12">
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 text-center mb-4">Fornecedor Principal</h3>
                        <div className="bg-gray-900 p-8 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/10 text-center">
                            <h4 className="text-4xl font-bold text-white">HAYAMAX</h4>
                        </div>
                    </div>

                    {/* Outras Marcas */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 text-center mb-4">Marcas em Destaque</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white/5 p-6 rounded-xl flex items-center justify-center border border-white/10">
                                <p className="text-xl font-semibold text-gray-300">NVIDIA</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl flex items-center justify-center border border-white/10">
                                <p className="text-xl font-semibold text-gray-300">INTEL</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl flex items-center justify-center border border-white/10">
                                <p className="text-xl font-semibold text-gray-300">AMD</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl flex items-center justify-center border border-white/10">
                                <p className="text-xl font-semibold text-gray-300">LOGITECH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
