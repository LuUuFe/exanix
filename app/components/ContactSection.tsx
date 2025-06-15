import { EnvelopeIcon, DevicePhoneMobileIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/dist/client/link';

export default function ContactSection() {
    return (
        <section id="contato" className="py-20 md:py-28 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Fale <span className="gradient-text">Conosco</span></h2>
                    <p className="mt-4 text-lg text-gray-400">Estamos prontos para ouvir sobre seu próximo projeto ou necessidade. Entre em contato e vamos transformar ideias em realidade.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center flex flex-col items-center">
                        <EnvelopeIcon className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
                        <p className="text-gray-400">Para propostas e consultas</p>
                        <a href="mailto:contato@exanix.com.br" className="text-purple-400 hover:text-purple-300 mt-1">contato@exanix.com.br</a>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center flex flex-col items-center">
                        <DevicePhoneMobileIcon className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                        <p className="text-gray-400">Para um contato mais rápido</p>
                        <a href="https://wa.me/5567984157550" className="text-purple-400 hover:text-purple-300 mt-1">(67) 98415-7550</a>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center flex flex-col items-center">
                        <MapPinIcon className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
                        <p className="text-gray-400">Atendimento remoto e local</p>
                        <a href="https://maps.app.goo.gl/qR86Y3pXXbxVtfiV9" target="_blank" className="text-purple-400 mt-1 hover:underline">Três Lagoas, MS - Brasil</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
