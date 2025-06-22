import { useNavigate } from "react-router-dom";
import { CircleArrowLeft, Copy, KeyRound, CheckCircle, TriangleAlert } from "lucide-react";
import MobileLayout from "../components/layout/MobileLayout";
import { useState } from "react";

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
            <div className="relative w-full h-full font-inter">
                {/* Botão de voltar */}
                <button
                    className="absolute top-[68px] left-[16px]"
                    onClick={() => navigate(-1)}
                >
                    <CircleArrowLeft className="w-[24px] h-[24px] text-[#D47EAE]" />
                </button>

                {/* Título */}
                <div className="absolute top-[140px] w-full px-6 text-center">
                    <div className="flex justify-center items-center gap-2">
                        <KeyRound className="w-[24px] h-[24px] text-[#D47EAE]" />
                        <h1 className="text-[24px] font-bold text-[#D47EAE]">Frase de Recuperação</h1>
                    </div>
                    <p className="text-[18px] font-medium text-white leading-[24px] mt-2">
                        Escreva essas palavras e mantenha-as em um lugar seguro
                    </p>

                    {/* Grid da seed com overlay */}
                    <div
                        className="relative mt-6 mx-auto w-[306px] h-[257px] rounded-[24px]"
                    >

                        {/* Overlay - cobre tudo */}
                        {!revealed && (
                            <div
                                className="absolute inset-[-16px] z-30 flex flex-col items-center justify-center px-4 text-center cursor-pointer rounded-[24px] backdrop-blur-sm bg-white/10 border border-white"
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
                </div>

                {/* Botão final */}
                <button
                    onClick={() => navigate("/wallet")}
                    className="absolute bottom-[165px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] rounded-full font-bold text-[18px] text-white"
                    style={{
                        background: "linear-gradient(90deg, #D47EAE 0%, #168BC2 100%)",
                    }}
                >
                    Frase salva
                </button>
            </div>
        </MobileLayout>
    );
}
