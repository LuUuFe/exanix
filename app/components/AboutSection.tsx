export default function AboutSection() {
    return (
        <section id="sobre" className="py-20 md:py-28 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Sobre a <span className="gradient-text">Exanix</span></h2>
                    <p className="mt-4 text-lg text-gray-400">Nossa jornada é impulsionada pela paixão por tecnologia e pelo compromisso em entregar resultados que importam.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="prose prose-invert prose-lg text-gray-400">
                        <p>
                            A Exanix foi fundada sobre um pilar central: ser um <strong>parceiro tecnológico completo</strong>. Em um mercado fragmentado, oferecemos uma solução unificada que abrange desde a venda de componentes de alta performance até o desenvolvimento de software sob medida e suporte técnico especializado.
                        </p>
                        <p>
                            Acreditamos que a tecnologia deve ser uma facilitadora, e não uma complicação. Por isso, nossa abordagem é consultiva e focada em entender as reais necessidades de cada cliente, seja ele um gamer buscando o máximo desempenho ou uma empresa em processo de transformação digital.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                            <h3 className="font-bold text-white text-xl mb-2">Nossa Missão</h3>
                            <p className="text-gray-400">Simplificar, otimizar e potencializar o dia a dia e os negócios dos nossos clientes através de produtos e serviços de tecnologia inovadores e de alta qualidade.</p>
                        </div>
                        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                            <h3 className="font-bold text-white text-xl mb-2">Nossa Visão</h3>
                            <p className="text-gray-400">Ser a principal referência em soluções de tecnologia na região, reconhecida pela excelência, confiança e pelo portfólio completo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
