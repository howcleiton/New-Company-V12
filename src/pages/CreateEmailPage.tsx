import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleArrowLeft, MailQuestion } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/celular load.json";
import MobileLayout from "@/components/layout/MobileLayout";
import { SPACING } from "@/constants/layout";
import PrimaryBottomButton from "@/components/ui/PrimaryBottomButton";

export default function CreateEmailPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValidEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const handleContinue = () => {
        if (isValidEmail(email)) {
            navigate("/create-pin");
        }
    };

    return (
        <MobileLayout>
            <div
                className="relative w-full h-[852px] px-6 text-white"
                style={{ paddingTop: SPACING.animationTop }}
            >
                {/* Botão de voltar */}
                <button
                    className="absolute z-10"
                    style={{
                        top: SPACING.backButtonTop,
                        left: SPACING.backButtonLeft,
                    }}
                    onClick={() => navigate("/create-option")}
                >
                    <CircleArrowLeft className="w-6 h-6 text-[#D47EAE]" />
                </button>

                {/* Animação */}
                <div className="flex justify-center">
                    <Lottie
                        animationData={animationData}
                        className="w-[250px] h-[250px]"
                    />
                </div>

                {/* Título */}
                <div
                    className="flex justify-center items-center gap-2 text-[#D47EAE]"
                    style={{ marginTop: SPACING.animationToTitle }}
                >
                    <MailQuestion className="w-6 h-6" />
                    <h1 className="text-[24px] font-bold">Digite seu e-mail</h1>
                </div>

                {/* Subtítulo */}
                <p
                    className="text-[18px] font-medium text-center leading-[24px]"
                    style={{ marginTop: SPACING.titleToSubtitle }}
                >
                    Nós usaremos isso para proteger e recuperar sua carteira
                </p>

                {/* Input com espaçamento de 24px */}
                <div className="flex justify-center mt-[24px]">
                    <input
                        type="email"
                        placeholder="exemplo@email.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setIsTouched(true);
                        }}
                        className="w-[299px] h-[48px] rounded-full px-4 text-white text-center text-[16px] font-medium bg-transparent border border-white placeholder:text-white/60 outline-none"
                    />
                </div>

                {/* Mensagem de erro */}
                {isTouched && !isValidEmail(email) && email.length > 0 && (
                    <p className="text-red-500 text-sm text-center mt-2">E-mail inválido</p>
                )}

                {/* Botão */}
                <PrimaryBottomButton
                    label="Continuar"
                    onClick={handleContinue}
                    disabled={!isValidEmail(email)}
                />
            </div>
        </MobileLayout>
    );
}
