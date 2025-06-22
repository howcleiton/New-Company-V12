import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/security.json';
import {
    CircleArrowLeft,
    LockKeyhole,
    Fingerprint,
} from 'lucide-react';

export default function CreateOptionSelect() {
    const navigate = useNavigate();

    return (
        <div
            className="relative w-[393px] h-[852px] bg-[#1F1F1F] rounded-[24px] text-white overflow-hidden mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            {/* Botão de voltar */}
            <button
                className="absolute top-[68px] left-[16px] z-10"
                onClick={() => navigate('/')}
            >
                <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
            </button>

            {/* Conteúdo com espaçamento de 140px */}
            <div className="pt-[140px] flex flex-col items-center px-6">
                {/* Animação */}
                <Lottie
                    animationData={animationData}
                    className="w-[250px] h-[250px]"
                />

                {/* Segurança reforçada */}
                <div className="mt-[32px] text-center">
                    <div className="flex items-center justify-center gap-2 text-[#D47EAE]">
                        <LockKeyhole className="w-[18px] h-[18px]" />
                        <h2 className="text-[18px] font-bold">Segurança reforçada</h2>
                    </div>
                    <p className="text-[18px] font-medium leading-[24px] mt-[8px] max-w-[320px] mx-auto">
                        Sua carteira está guardada de forma segura e descentralizada com múltiplos fatores.
                    </p>
                </div>

                {/* Recuperação fácil */}
                <div className="mt-[24px] text-center">
                    <div className="flex items-center justify-center gap-2 text-[#D47EAE]">
                        <Fingerprint className="w-[18px] h-[18px]" />
                        <h2 className="text-[18px] font-bold">Recuperação fácil</h2>
                    </div>
                    <p className="text-[18px] font-medium leading-[24px] mt-[8px] max-w-[320px] mx-auto">
                        Recupere sua carteira com seu e-mail e um PIN de 4 dígitos.
                    </p>
                </div>
            </div>

            {/* Botão degradê - 165px da borda */}
            <button
                onClick={() => navigate('/create-email')}
                className="absolute bottom-[165px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] rounded-full font-bold text-[18px] text-white"
                style={{
                    background: 'linear-gradient(90deg, #D47EAE 0%, #168BC2 100%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
            >
                Continuar com Email
            </button>

            {/* Botão com borda branca - 104px da borda */}
            <button
                onClick={() => navigate('/create-wallet')}
                className="absolute bottom-[104px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] rounded-full border border-white text-white font-bold text-[18px]"
            >
                Crie uma carteira
            </button>
        </div>
    );
}
