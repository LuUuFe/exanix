"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const solutionsData = {
    products: {
        gamer: ['Cadeiras Gamer', 'Coolers', 'Fontes Gamer', 'Gabinetes', 'Hubs', 'Headsets e Fones', 'Mesas Gamer', 'Microfones', 'Mousepads', 'Mouses', 'Ring Light', 'Teclados', 'Telas', 'Webcam'],
        computing: ['Acessórios', 'Armazenamento', 'Cabos HDMI', 'Caixas de Som', 'Filtros de Linha', 'Fontes ATX', 'Gabinetes ATX', 'Hubs USB', 'Mouses', 'Nobreak', 'Redes e Internet', 'Suporte Monitor', 'Teclados', 'Wi-Fi'],
        electronics: ['Antenas', 'Suportes para TVs', 'Áudio e Vídeo', 'Baterias', 'Calculadoras', 'Controle Remoto', 'Cuidados Pessoais', 'Fones de Ouvido', 'Rádios', 'Relógios Smart']
    },
    services: [
        { title: 'Desenvolvimento de Software e Web', items: ['Criação de sites e blogs', 'Sistemas web sob demanda', 'Aplicativos móveis (Android/iOS)', 'Lojas virtuais (e-commerce)', 'Automatização de processos', 'Manutenção de sistemas'] },
        { title: 'Suporte Técnico e Infraestrutura', items: ['Formatação e reinstalação', 'Montagem e upgrade de PCs', 'Instalação de softwares', 'Remoção de vírus e otimização', 'Backup e recuperação de dados', 'Suporte remoto'] },
        { title: 'Serviços em Nuvem', items: ['Criação de e-mails personalizados', 'Hospedagem de sites e domínios', 'Migração de dados para a nuvem'] },
        { title: 'Serviços Digitais e Multimídia', items: ['Criação de landing pages', 'Criação de vídeos tutoriais'] }
    ]
};

export default function SolutionsSection() {
    const [activeTab, setActiveTab] = useState('products');
    const [activeSubTab, setActiveSubTab] = useState('gamer');
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    return (
        <section id="solucoes" className="py-20 md:py-28 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Portfólio de <span className="gradient-text">Soluções</span></h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">Oferecemos um ecossistema completo de produtos e serviços, desenhado para atender todas as suas necessidades tecnológicas.</p>
                </div>

                <div className="w-full max-w-4xl mx-auto">
                    <div className="mb-8 flex border-b border-gray-800">
                        <button onClick={() => setActiveTab('products')} className={`flex-1 py-4 px-1 text-center font-semibold text-lg border-b-2 transition-colors duration-300 ${activeTab === 'products' ? 'text-white border-purple-500' : 'text-gray-400 border-transparent hover:text-white'}`}>
                            Produtos
                        </button>
                        <button onClick={() => setActiveTab('services')} className={`flex-1 py-4 px-1 text-center font-semibold text-lg border-b-2 transition-colors duration-300 ${activeTab === 'services' ? 'text-white border-purple-500' : 'text-gray-400 border-transparent hover:text-white'}`}>
                            Serviços
                        </button>
                    </div>

                    {activeTab === 'products' && (
                        <div>
                            <div className="flex justify-center mb-8 gap-4 flex-wrap">
                                <button onClick={() => setActiveSubTab('gamer')} className={`text-sm md:text-base font-semibold py-2 px-5 rounded-full transition-colors duration-300 ${activeSubTab === 'gamer' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Gamer</button>
                                <button onClick={() => setActiveSubTab('computing')} className={`text-sm md:text-base font-semibold py-2 px-5 rounded-full transition-colors duration-300 ${activeSubTab === 'computing' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Informática</button>
                                <button onClick={() => setActiveSubTab('electronics')} className={`text-sm md:text-base font-semibold py-2 px-5 rounded-full transition-colors duration-300 ${activeSubTab === 'electronics' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Eletrônicos</button>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
                                {solutionsData.products[activeSubTab as keyof typeof solutionsData.products].map(item => (
                                    <div key={item} className="bg-gray-900 p-4 rounded-lg border border-gray-800 text-center text-gray-300 font-medium">{item}</div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'services' && (
                        <div className="space-y-4">
                            {solutionsData.services.map((service, index) => (
                                <div key={service.title} className="accordion-item bg-gray-900 rounded-xl border border-gray-800">
                                    <button onClick={() => setOpenAccordion(openAccordion === index ? null : index)} className="w-full flex justify-between items-center p-5 text-left font-semibold text-white">
                                        <span>{service.title}</span>
                                        <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="px-5 pb-5">
                                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                                {service.items.map(item => <li key={item}>{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
