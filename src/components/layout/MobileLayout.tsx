import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
    /**
     * Quantidade de botões na parte inferior (1 ou 2) para ajustar o padding.
     * Se não informado, assume 1 botão.
     */
    bottomButtonsCount?: 1 | 2;
}

const MobileLayout = ({ children, bottomButtonsCount = 1 }: MobileLayoutProps) => {
    // Padding inferior conforme o Figma
    const bottomPadding = bottomButtonsCount === 2 ? 104 : 165;
    return (
        <div
            className="w-full min-h-[100dvh] bg-[#1F1F1F] text-white flex justify-center"
            style={{
                fontFamily: 'Inter, sans-serif',
                WebkitOverflowScrolling: 'touch',
            }}
        >
            <div
                className="w-full max-w-[393px] h-full flex flex-col overflow-y-auto"
                style={{
                    paddingTop: '140px', // padding superior do Figma
                    paddingBottom: `calc(${bottomPadding}px + var(--safe-bottom))`,
                    paddingLeft: 'var(--safe-left)',
                    paddingRight: 'var(--safe-right)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;
