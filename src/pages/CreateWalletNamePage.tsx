import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileLayout from "../components/layout/MobileLayout";

export default function CreateWalletNamePage() {
    const navigate = useNavigate();
    const [walletName, setWalletName] = useState("");

    const handleContinue = () => {
        if (walletName.trim() === "") return;
        navigate("/create-seed");
    };

    return (
        <MobileLayout>
            <div className="flex flex-col h-full w-full px-6 font-inter pb-[165px]">
                {/* Título + Subtítulo - 140px do topo */}
                <div className="pt-[140px] text-center">
                    <h1 className="text-[24px] font-bold text-[#D47EAE] mb-2">
                        Nome da carteira
                    </h1>
                    <p className="text-[18px] font-medium text-white leading-[24px] max-w-[320px] mx-auto">
                        Dê um nome a sua carteira. Esse nome poderá ser trocado posteriormente
                    </p>
                </div>

                {/* Espaço fixo até 402px */}
                <div className="mt-[94px] flex justify-center">
                    <input
                        type="text"
                        placeholder="Ex: How Wallet"
                        value={walletName}
                        onChange={(e) => setWalletName(e.target.value)}
                        className="w-[299px] h-[48px] px-4 rounded-full border border-white bg-transparent text-white placeholder:text-white/60"
                    />
                </div>

                {/* Botão fixado na parte inferior com 165px */}
                <div className="mt-auto flex justify-center">
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
            </div>
        </MobileLayout>
    );
}
