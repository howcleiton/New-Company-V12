type PrimaryBottomButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

export default function PrimaryBottomButton({
    label,
    onClick,
    disabled = false,
}: PrimaryBottomButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`fixed bottom-[165px] left-1/2 transform -translate-x-1/2 w-[299px] h-[48px] rounded-full font-bold text-[18px] z-10 ${disabled
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "text-white bg-gradient-to-r from-[#D47EAE] to-[#168BC2]"
                }`}
            style={{
                boxShadow: disabled ? "none" : "0 4px 12px rgba(0,0,0,0.3)",
            }}
        >
            {label}
        </button>
    );
}
