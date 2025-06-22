import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/welcome-page.json';
import MobileLayout from '../components/layout/MobileLayout';

export default function WelcomePage() {
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);

    return (
        <MobileLayout>
            <div className="flex flex-col h-full w-full px-4 pt-[140px] font-inter">
                {/* Animação */}
                <div className="flex justify-center">
                    <Lottie
                        animationData={animationData}
                        className="w-[250px] h-[250px]"
                    />
                </div>

                {/* Título */}
                <h1 className="text-[30px] font-bold text-[#D47EAE] text-center mt-[32px]">
                    Bem-vindo à How
                </h1>

                {/* Subtítulo */}
                <p className="text-[18px] font-medium text-white text-center mt-[8px] leading-[24px]">
                    Sua carteira de criptomoedas segura<br />e fácil de usar
                </p>

                {/* Checkbox */}
                <label className="flex items-center justify-center mt-[82px] text-white text-[16px] font-medium">
                    <input
                        type="checkbox"
                        className="mr-2 w-4 h-4 accent-[#D47EAE]"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                    />
                    Aceito os{' '}
                    <button
                        className="text-[#D47EAE] underline ml-1"
                        onClick={() => navigate('/terms')}
                    >
                        termos de serviço
                    </button>
                </label>

                {/* Botões */}
                <div className="mt-auto flex flex-col items-center gap-[13px]">
                    <button
                        disabled={!accepted}
                        onClick={() => navigate('/create-option')}
                        className={`w-[299px] h-[48px] rounded-full font-bold text-[18px] ${accepted
                            ? 'bg-gradient-to-r from-[#D47EAE] to-[#168BC2] text-white'
                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            }`}
                        style={{
                            boxShadow: accepted ? '0 4px 12px rgba(0,0,0,0.3)' : 'none',
                        }}
                    >
                        Começar
                    </button>

                    <button
                        disabled={!accepted}
                        onClick={() => navigate('/import-wallet')}
                        className={`w-[299px] h-[48px] rounded-full font-bold text-[18px] border ${accepted
                            ? 'border-white text-white'
                            : 'border-white/60 text-white/60 cursor-not-allowed'
                            }`}
                    >
                        Importar Carteira Existente
                    </button>
                </div>
            </div>
        </MobileLayout>
    );
}
