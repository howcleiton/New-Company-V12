import { useNavigate } from "react-router-dom";
import {
    CircleArrowLeft,
    Copy,
    KeyRound,
    CheckCircle,
    TriangleAlert,
} from "lucide-react";
import MobileLayout from "../components/layout/MobileLayout";
import { useState } from "react";
import PrimaryBottomButton from "@/components/ui/PrimaryBottomButton";

export default function CreateWalletPage() {
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
    const [revealed, setRevealed] = useState(false);

    const seedWords = [
        "yellow", "puzzle", "glare", "wise",
        "tell", "second", "govern", "found",
        "exotic", "enforce", "slow", "mother",
    ];

    const handleCopy = () => {
        const seed = seedWords.join(" ");
        navigator.clipboard.writeText(seed);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <MobileLayout>
            <div className="flex flex-col h-full w-full font-inter px-6 pt-[68px] pb-[165px] relative">
                {/* Botão de voltar */}
                <button
                    className="absolute top-[68px] left-[16px]"
                    onClick={() => navigate(-1)}
                >
                    <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
                </button>

                {/* Título e subtítulo */}
                <div className="mt-[72px] flex flex-col items-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <KeyRound className="w-[24px] h-[24px] text-[#D47EAE]" />
                        <h1 className="text-[24px] font-bold text-[#D47EAE]">
                            Frase de Recuperação
                        </h1>
                    </div>
                    <p className="text-[18px] font-medium text-white leading-[24px] text-center">
                        Escreva essas palavras e mantenha-as<br />em um lugar seguro
                    </p>
                </div>

                {/* Grid da seed com overlay */}
                <div className="relative mt-6 w-[306px] h-[257px] mx-auto rounded-[24px]">
                    {/* Overlay */}
                    {!revealed && (
                        <div
                            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 text-center cursor-pointer rounded-[24px] backdrop-blur-sm bg-white/10 border border-white"
                            onClick={() => setRevealed(true)}
                        >
                            <div className="flex items-start gap-2 text-white text-[16px] font-medium leading-tight">
                                <TriangleAlert className="w-8 h-8 text-[#D47EAE] mt-[2px]" />
                                <span className="text-left">
                                    Nunca compartilhe sua frase de<br />
                                    recuperação
                                </span>
                            </div>
                            <button className="mt-3 text-[#D47EAE] underline font-bold">
                                Toque para revelar
                            </button>
                        </div>
                    )}

                    {/* Grade da seed */}
                    <div className="absolute inset-0 z-10 grid grid-cols-2 gap-x-[13px] gap-y-[13px] p-[0.5px]">
                        {seedWords.map((word, index) => (
                            <div
                                key={index}
                                className="w-[146.5px] h-[32px] border border-white rounded-[24px] flex overflow-hidden"
                            >
                                <div className="w-[32px] h-full flex items-center justify-center border-r border-white text-white text-sm font-bold">
                                    {index + 1}
                                </div>
                                <div className="flex-1 flex items-center justify-center text-white text-sm font-medium">
                                    {word}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copiar */}
                <div
                    className="mt-6 flex justify-center items-center gap-2 text-white font-medium text-[18px] cursor-pointer"
                    onClick={handleCopy}
                >
                    {copied ? (
                        <CheckCircle className="w-5 h-5 text-[#D47EAE]" />
                    ) : (
                        <Copy className="w-5 h-5 text-[#D47EAE]" />
                    )}
                    {copied ? "Seed copiada!" : "Copiar para área de transferência"}
                </div>

                {/* Botão "Frase salva" fixo */}
                <PrimaryBottomButton
                    label="Frase salva"
                    onClick={() => navigate("/wallet")}
                />
            </div>
        </MobileLayout>
    );
}
