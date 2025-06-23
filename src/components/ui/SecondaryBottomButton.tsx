type SecondaryBottomButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

export default function SecondaryBottomButton({
    label,
    onClick,
    disabled = false,
}: SecondaryBottomButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`fixed bottom-[104px] left-1/2 transform -translate-x-1/2 w-[299px] h-[48px] rounded-full font-bold text-[18px] z-10 border ${disabled
                ? "border-white/60 text-white/60 cursor-not-allowed"
                : "border-white text-white"
                }`}
        >
            {label}
        </button>
    );
}
