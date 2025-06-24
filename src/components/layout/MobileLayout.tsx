import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
    /**
     * Quantidade de botões na parte inferior (1 ou 2) para ajustar o padding.
     * Se não informado, assume 1 botão.
     */
    bottomButtonsCount?: 1 | 2;
    /**
     * Footer fixo na base do layout (botões de ação).
     */
    footer?: React.ReactNode;
}

const MobileLayout = ({ children, bottomButtonsCount = 1, footer }: MobileLayoutProps) => {
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
                className="w-full max-w-[393px] h-full flex flex-col relative"
            >
                {/* Conteúdo rolável */}
                <div
                    className="flex-1 overflow-y-auto"
                    style={{
                        paddingTop: '140px', // padding superior do Figma
                        paddingBottom: `${bottomPadding}px`,
                        paddingLeft: '0px',
                        paddingRight: '0px',
                    }}
                >
                    {children}
                </div>
                {/* Footer fixo */}
                {footer && (
                    <footer
                        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] px-4 z-50"
                        style={{
                            paddingBottom: '24px',
                            background: 'rgba(24,24,27,0.95)',
                        }}
                    >
                        {footer}
                    </footer>
                )}
            </div>
        </div>
    );
};

export default MobileLayout;
