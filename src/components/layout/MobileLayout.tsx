import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div
            className="w-full min-h-[100dvh] bg-[#1F1F1F] text-white flex justify-center overflow-hidden"
            style={{
                fontFamily: 'Inter, sans-serif',
            }}
        >
            <div
                className="w-[393px] min-h-[100dvh] flex flex-col justify-between overflow-hidden relative"
                style={{
                    paddingTop: 'env(safe-area-inset-top)',
                    paddingBottom: 'calc(165px + env(safe-area-inset-bottom))', // ⬅️ AQUI É O PULO DO GATO
                    paddingLeft: 'env(safe-area-inset-left)',
                    paddingRight: 'env(safe-area-inset-right)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;
