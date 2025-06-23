import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/welcome-page.json';
import MobileLayout from '../components/layout/MobileLayout';
import { SPACING } from '@/constants/layout';
import PrimaryBottomButton from '@/components/ui/PrimaryBottomButton';
import SecondaryBottomButton from '@/components/ui/SecondaryBottomButton';

export default function WelcomePage() {
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);

    return (
        <MobileLayout>
            {/* Container principal com altura e posicionamento fixos */}
            <div
                className="relative w-full h-[852px] px-6"
                style={{ paddingTop: SPACING.animationTop }}
            >
                {/* Animação */}
                <Lottie animationData={animationData} className="w-[250px] h-[250px]" />

                {/* Título */}
                <h1
                    className="text-[30px] font-bold text-[#D47EAE] text-center"
                    style={{ marginTop: SPACING.animationToTitle }}
                >
                    Bem-vindo à How
                </h1>

                {/* Subtítulo */}
                <p
                    className="text-[18px] font-medium text-white text-center leading-[24px]"
                    style={{ marginTop: SPACING.titleToSubtitle }}
                >
                    Sua carteira de criptomoedas segura<br />
                    e fácil de usar
                </p>

                {/* Checkbox */}
                <label
                    className="flex items-center text-white text-[16px] font-medium"
                    style={{ marginTop: 82 }}
                >
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

                {/* Botões fixos na parte inferior */}
                <PrimaryBottomButton
                    label="Começar"
                    onClick={() => navigate("/create-option")}
                    disabled={!accepted}
                />

                <SecondaryBottomButton
                    label="Importar Carteira Existente"
                    onClick={() => navigate("/import-wallet")}
                    disabled={!accepted}
                />
            </div>
        </MobileLayout>
    );
}
