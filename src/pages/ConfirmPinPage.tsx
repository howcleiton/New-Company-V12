import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleArrowLeft, Lock } from 'lucide-react';
import { usePinStore } from '../store/pinStore';
import MobileLayout from "@/components/layout/MobileLayout";
import PrimaryBottomButton from "@/components/ui/PrimaryBottomButton";

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
            navigate('/create-wallet-name');
        } else {
            setError(true);
        }
    };

    return (
        <MobileLayout>
            {/* Botão de voltar */}
            <button
                className="absolute top-[68px] left-[16px] z-10"
                onClick={() => navigate('/create-pin')}
            >
                <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
            </button>

            {/* Título e subtítulo */}
            <div className="pt-[140px] px-6 text-center font-inter">
                <div className="flex justify-center items-center gap-2 text-[#D47EAE]">
                    <Lock className="w-[24px] h-[24px]" />
                    <h1 className="text-[24px] font-bold">Confirme seu PIN</h1>
                </div>
                <p className="text-[18px] font-medium text-white mt-[8px] leading-[24px] max-w-[320px] mx-auto">
                    Se esquecer o PIN, não será possível recuperar a sua carteira em um novo dispositivo
                </p>
            </div>

            {/* Campo de PIN fixo a 402px do topo */}
            <div className="absolute top-[402px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] border border-white/60 rounded-full flex items-center justify-center gap-[20px]">
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

            {/* Mensagem de erro abaixo do PIN */}
            {error && (
                <p className="text-red-500 text-sm text-center absolute top-[460px] left-1/2 -translate-x-1/2">
                    Os PINs não coincidem.
                </p>
            )}

            {/* Botão continuar */}
            <PrimaryBottomButton
                label="Criar PIN"
                onClick={handleConfirm}
                disabled={confirmPin.length < 4}
            />
        </MobileLayout>
    );
}
