import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleArrowLeft, Lock } from 'lucide-react';
import { usePinStore } from '../store/pinStore';
import MobileLayout from "@/components/layout/MobileLayout";

export default function ConfirmPinPage() {
    const navigate = useNavigate();
    const originalPin = usePinStore((state) => state.pin);
    const [confirmPin, setConfirmPin] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 4) {
            setConfirmPin(value);
            setError(false);
        }
    };

    const handleConfirm = () => {
        if (confirmPin === originalPin) {
            console.log('✅ PIN confirmado!');
            navigate('/create-wallet-name');
        } else {
            setError(true);
        }
    };

    return (
        <MobileLayout>
            <div className="flex flex-col h-full w-full px-4 pt-[68px] pb-[165px] relative">
                {/* Botão de voltar */}
                <button
                    className="absolute top-[68px] left-[16px] z-10"
                    onClick={() => navigate('/create-pin')}
                >
                    <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
                </button>

                {/* Título e subtítulo */}
                <div className="mt-[72px] flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 text-[#D47EAE]">
                        <Lock className="w-[24px] h-[24px]" />
                        <h1 className="text-[24px] font-bold">Confirme seu PIN</h1>
                    </div>
                    <p className="text-[18px] font-medium text-white mt-[8px] leading-[24px] max-w-[320px]">
                        Se esquecer o PIN, não será possível recuperar a sua carteira em um novo dispositivo
                    </p>
                </div>

                {/* Campo de PIN */}
                <div className="mt-[64px] w-full flex justify-center">
                    <div className="relative w-[299px] h-[48px] border border-white/60 rounded-full flex items-center justify-center gap-[20px]">
                        {[0, 1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className={`w-[10px] h-[10px] rounded-full ${confirmPin.length > index ? 'bg-white' : 'bg-white/30'}`}
                            />
                        ))}
                        <input
                            type="tel"
                            maxLength={4}
                            inputMode="numeric"
                            value={confirmPin}
                            onChange={handleChange}
                            className="absolute inset-0 opacity-0 w-full h-full"
                        />
                    </div>
                </div>

                {/* Erro de confirmação */}
                {error && (
                    <p className="text-red-500 text-sm text-center mt-4">
                        Os PINs não coincidem.
                    </p>
                )}

                {/* Botão */}
                <div className="mt-auto flex justify-center">
                    <button
                        disabled={confirmPin.length < 4}
                        onClick={handleConfirm}
                        className="w-[299px] h-[48px] rounded-full font-bold text-[18px] text-white disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                            background:
                                confirmPin.length === 4
                                    ? 'linear-gradient(90deg, #D47EAE 0%, #168BC2 100%)'
                                    : 'linear-gradient(90deg, #444 0%, #444 100%)',
                            boxShadow:
                                confirmPin.length === 4 ? '0 4px 12px rgba(0,0,0,0.3)' : 'none',
                        }}
                    >
                        Criar PIN
                    </button>
                </div>
            </div>
        </MobileLayout>
    );
}
