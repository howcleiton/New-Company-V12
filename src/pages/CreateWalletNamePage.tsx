import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import PrimaryBottomButton from "@/components/ui/PrimaryBottomButton";

export default function CreateWalletNamePage() {
    const navigate = useNavigate();
    const [walletName, setWalletName] = useState("");

    const handleContinue = () => {
        if (walletName.trim() === "") return;
        navigate("/create-seed");
    };

    return (
        <MobileLayout
            footer={
                <PrimaryBottomButton
                    label="Continuar"
                    onClick={handleContinue}
                    disabled={walletName.trim() === ""}
                />
            }
        >
            {/* Título + Subtítulo */}
            <div className="pt-[140px] px-6 text-center font-inter">
                <h1 className="text-[24px] font-bold text-[#D47EAE] mb-[8px]">
                    Nome da carteira
                </h1>
                <p className="text-[18px] font-medium text-white leading-[24px] max-w-[320px] mx-auto">
                    Dê um nome à sua carteira. Esse nome poderá ser trocado posteriormente.
                </p>
            </div>

            {/* Input centralizado a 402px do topo */}
            <div className="absolute top-[402px] left-1/2 -translate-x-1/2 w-[299px] h-[48px] px-4 rounded-full border border-white bg-transparent flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Ex: How Wallet"
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                    className="w-full text-center text-white text-[16px] font-medium placeholder:text-white/60 bg-transparent outline-none"
                />
            </div>
        </MobileLayout>
    );
}
