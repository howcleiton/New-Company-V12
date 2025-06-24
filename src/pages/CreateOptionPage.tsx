import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/security.json";
import {
    CircleArrowLeft,
    LockKeyhole,
    Fingerprint,
} from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";
import { SPACING } from "@/constants/layout";
import PrimaryBottomButton from "@/components/ui/PrimaryBottomButton";
import SecondaryBottomButton from "@/components/ui/SecondaryBottomButton";

export default function CreateOptionSelect() {
    const navigate = useNavigate();

    return (
        <MobileLayout
            footer={
                <>
                    <PrimaryBottomButton
                        label="Continuar com Email"
                        onClick={() => navigate("/create-email")}
                    />
                    <SecondaryBottomButton
                        label="Crie uma carteira"
                        onClick={() => navigate("/create-wallet")}
                    />
                </>
            }
            bottomButtonsCount={2}
        >
            <div className="relative w-full h-[852px] px-6">
                {/* Botão de voltar */}
                <button
                    className="absolute z-10"
                    style={{ top: SPACING.backButtonTop, left: SPACING.backButtonLeft }}
                    onClick={() => navigate("/")}
                >
                    <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
                </button>

                {/* Conteúdo central */}
                <div
                    className="flex flex-col items-center"
                    style={{ paddingTop: SPACING.animationTop }}
                >
                    {/* Animação */}
                    <Lottie animationData={animationData} className="w-[250px] h-[250px]" />

                    {/* Segurança reforçada */}
                    <div style={{ marginTop: SPACING.animationToTitle }} className="text-center">
                        <div className="flex items-center justify-center gap-2 text-[#D47EAE]">
                            <LockKeyhole className="w-[18px] h-[18px]" />
                            <h2 className="text-[18px] font-bold">Segurança reforçada</h2>
                        </div>
                        <p className="text-[18px] font-medium leading-[24px] mt-[8px] max-w-[320px] mx-auto text-white">
                            Sua carteira está guardada de forma segura e descentralizada com múltiplos fatores.
                        </p>
                    </div>

                    {/* Recuperação fácil */}
                    <div style={{ marginTop: SPACING.subtitleToNextTitle }} className="text-center">
                        <div className="flex items-center justify-center gap-2 text-[#D47EAE]">
                            <Fingerprint className="w-[18px] h-[18px]" />
                            <h2 className="text-[18px] font-bold">Recuperação fácil</h2>
                        </div>
                        <p className="text-[18px] font-medium leading-[24px] mt-[8px] max-w-[320px] mx-auto text-white">
                            Recupere sua carteira com seu e-mail e um PIN de 4 dígitos.
                        </p>
                    </div>
                </div>
            </div>
        </MobileLayout>
    );
}
