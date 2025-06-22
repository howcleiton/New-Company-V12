import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleArrowLeft, LockOpen } from 'lucide-react';
import { usePinStore } from '../store/pinStore'; // 👈 import

export default function CreatePinPage() {
    // dentro do componente:
    const setPinGlobal = usePinStore((state) => state.setPin);

    const navigate = useNavigate();
    const [pin, setPin] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 4) setPin(value);
    };

    return (
        <div
            className="relative w-[393px] h-[852px] mx-auto bg-[#1F1F1F] rounded-[24px] text-white overflow-hidden"
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            {/* Botão de voltar */}
            <button
                className="absolute top-[68px] left-[16px]"
                onClick={() => navigate('/create-email')}
            >
                <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
            </button>

            {/* Título e subtítulo */}
            <div className="absolute top-[140px] w-full px-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-[#D47EAE]">
                    <LockOpen className="w-[24px] h-[24px]" />
                    <h1 className="text-[24px] font-bold">Criar um PIN</h1>
                </div>
                <p className="text-[18px] font-medium text-white mt-[8px] leading-[24px] max-w-[320px]">
                    Isto é utilizado para tornar sua carteira segura em todos os dispositivos.{' '}
                    <span className="text-[#D47EAE] font-semibold">Isto não pode ser recuperado</span>
                </p>
            </div>

            {/* PIN container com 4 bolinhas */}
            <div className="absolute top-[402px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] border border-white/60 rounded-full flex items-center justify-center gap-[20px]">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className={`w-[10px] h-[10px] rounded-full ${pin.length > index ? 'bg-white' : 'bg-white/30'
                            }`}
                    />
                ))}
                {/* input invisível para capturar o PIN */}
                <input
                    type="tel"
                    maxLength={4}
                    inputMode="numeric"
                    value={pin}
                    onChange={handleChange}
                    className="absolute inset-0 opacity-0 w-full h-full"
                />
            </div>

            {/* Botão continuar */}
            <button
                disabled={pin.length < 4}
                onClick={() => {
                    setPinGlobal(pin);
                    navigate('/confirm-pin');
                }}
                className="absolute bottom-[165px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] rounded-full font-bold text-[18px] text-white disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                    background: pin.length === 4
                        ? 'linear-gradient(90deg, #D47EAE 0%, #168BC2 100%)'
                        : 'linear-gradient(90deg, #444 0%, #444 100%)',
                    boxShadow: pin.length === 4 ? '0 4px 12px rgba(0,0,0,0.3)' : 'none',
                }}
            >
                Continuar
            </button>
        </div>
    );
}
