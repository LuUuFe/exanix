"use client";

import { useState, useEffect, useRef } from 'react';
import { UserGroupIcon, SparklesIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const marketData = [
    {
        id: 'target-audience',
        icon: UserGroupIcon,
        title: 'Público-Alvo',
        content: [
            { subtitle: 'Produtos', text: 'Gamers, estudantes, profissionais em home office e entusiastas de tecnologia que buscam performance e qualidade.' },
            { subtitle: 'Serviços', text: 'Pequenas e médias empresas que necessitam de presença digital e suporte, além de pessoas físicas que precisam de manutenção especializada.' }
        ]
    },
    {
        id: 'differentiator',
        icon: SparklesIcon,
        title: 'Diferencial Competitivo',
        content: [
            { subtitle: 'Descrição', text: 'O grande diferencial da Exanix é a integração total de produtos e serviços. Um cliente que compra um computador pode contratar o serviço de instalação de softwares ou um plano de suporte contínuo, criando uma experiência completa e sem atritos.' }
        ]
    },
    {
        id: 'trends',
        icon: ArrowTrendingUpIcon,
        title: 'Tendências de Mercado',
        content: [
            { subtitle: 'Descrição', text: 'Capitalizamos em quatro grandes tendências: o crescimento contínuo do mercado Gamer, a necessidade de digitalização para empresas, a consolidação do trabalho remoto e a busca incessante por automação e eficiência.' }
        ]
    },
];

export default function MarketAnalysisSection() {
    const [activeId, setActiveId] = useState(marketData[0].id);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, { rootMargin: '-40% 0px -60% 0px' });

        const elements = marketData.map(item => document.getElementById(item.id)).filter(Boolean);
        elements.forEach(el => observer.current?.observe(el!));

        return () => {
            elements.forEach(el => observer.current?.unobserve(el!));
        };
    }, []);

    return (
        <section id="mercado" className="py-20 md:py-28 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Análise de <span className="gradient-text">Mercado</span></h2>
                    <p className="mt-4 text-lg text-gray-400">Posicionamento estratégico para atender às demandas de públicos distintos e aproveitar as tendências do setor.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:sticky top-28 self-start">
                        <ul className="space-y-2">
                            {marketData.map(item => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} className={`flex items-center p-4 rounded-lg transition-all duration-300 ${activeId === item.id ? 'bg-purple-600/10 border border-purple-500/30' : 'border border-transparent hover:bg-gray-800/50'}`}>
                                        <item.icon className={`w-6 h-6 mr-4 transition-colors duration-300 ${activeId === item.id ? 'text-purple-400' : 'text-gray-500'}`} />
                                        <span className={`text-xl font-bold ${activeId === item.id ? 'text-white' : 'text-gray-400'}`}>{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-24">
                        {marketData.map(item => (
                            <div key={item.id} id={item.id} className="scroll-mt-28">
                                <h3 className="flex items-center text-3xl font-bold text-white mb-6">
                                    <item.icon className="w-8 h-8 mr-4 text-purple-400" />
                                    {item.title}
                                </h3>
                                <div className="space-y-4 text-gray-400 text-lg leading-relaxed border-l-2 border-gray-800 pl-8">
                                    {item.content.map((p, index) => (
                                        <div key={index}>
                                            {p.subtitle && <p className="font-semibold text-white mb-1">{p.subtitle}</p>}
                                            <p>{p.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
