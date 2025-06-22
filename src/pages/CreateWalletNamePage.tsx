import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";


export default function CreateWalletNamePage() {
    const navigate = useNavigate();
    const [walletName, setWalletName] = useState("");

    const handleContinue = () => {
        if (walletName.trim() === "") return;
        navigate("/create-seed");
    };

    return (
        <MobileLayout>
            {/* Título + Subtítulo */}
            <div className="pt-[140px] px-6 text-center font-inter">
                <h1 className="text-[24px] font-bold text-[#D47EAE] mb-2">
                    Nome da carteira
                </h1>
                <p className="text-[18px] font-medium text-white leading-[24px] max-w-[320px] mx-auto">
                    Dê um nome a sua carteira. Esse nome poderá ser trocado posteriormente
                </p>
            </div>

            {/* Input centralizado a 402px */}
            <div className="absolute top-[402px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] px-4 rounded-full border border-white bg-transparent flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Ex: How Wallet"
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                    className="w-full bg-transparent text-white placeholder:text-white/60 outline-none"
                />
            </div>

            {/* Botão fixado a 165px do final */}
            <div className="absolute bottom-[165px] w-full flex justify-center px-6">
                <button
                    onClick={handleContinue}
                    disabled={walletName.trim() === ""}
                    className="w-[299px] h-[48px] rounded-full font-bold text-[18px] text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                        background:
                            walletName.trim() !== ""
                                ? "linear-gradient(90deg, #D47EAE 0%, #168BC2 100%)"
                                : "linear-gradient(90deg, #444 0%, #444 100%)",
                    }}
                >
                    Continuar
                </button>
            </div>
        </MobileLayout>
    );
}
