import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleArrowLeft, MailQuestion } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/celular load.json';
import MobileLayout from "@/components/layout/MobileLayout"; // 👈 importado aqui

export default function CreateEmailPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValidEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const handleContinue = () => {
        if (isValidEmail(email)) {
            navigate('/create-pin');
        }
    };

    return (
        <MobileLayout>
            {/* Botão de voltar */}
            <button className="absolute top-[68px] left-[16px]" onClick={() => navigate('/create-option')}>
                <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
            </button>

            {/* Conteúdo principal */}
            <div className="flex flex-col items-center px-4 pt-[140px]">
                {/* Animação */}
                <Lottie animationData={animationData} className="w-[250px] h-[250px]" />

                {/* Título */}
                <div className="flex items-center gap-2 text-[#D47EAE] mt-[32px]">
                    <MailQuestion className="w-[24px] h-[24px]" />
                    <h1 className="text-[24px] font-bold">Qual seu e-mail?</h1>
                </div>

                {/* Subtítulo */}
                <p className="text-[18px] font-medium text-white mt-[8px] text-center leading-[24px] max-w-[320px]">
                    Usaremos seu e-mail apenas para recuperação e autenticação da carteira.
                </p>

                {/* Campo de e-mail */}
                <input
                    type="email"
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setIsTouched(true);
                    }}
                    className="mt-[32px] w-[299px] h-[48px] rounded-full px-4 text-white text-center text-[16px] font-medium bg-transparent border border-white placeholder:text-white/60 outline-none"
                />

                {/* Mensagem de erro */}
                {isTouched && !isValidEmail(email) && email.length > 0 && (
                    <p className="text-red-500 text-sm mt-2">E-mail inválido</p>
                )}
            </div>

            {/* Botão Continuar */}
            <button
                disabled={!isValidEmail(email)}
                onClick={handleContinue}
                className="absolute bottom-[165px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] rounded-full font-bold text-[18px] text-white disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                    background: isValidEmail(email)
                        ? 'linear-gradient(90deg, #D47EAE 0%, #168BC2 100%)'
                        : 'linear-gradient(90deg, #444 0%, #444 100%)',
                    boxShadow: isValidEmail(email)
                        ? '0 4px 12px rgba(0,0,0,0.3)'
                        : 'none',
                }}
            >
                Continuar
            </button>
        </MobileLayout>
    );
}
