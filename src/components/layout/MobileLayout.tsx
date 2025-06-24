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
                paddingBottom: 'env(safe-area-inset-bottom)',
                paddingTop: 'env(safe-area-inset-top)', // ✅ ESSENCIAL PARA SAFARI E PWA
                paddingLeft: 'env(safe-area-inset-left)',
                paddingRight: 'env(safe-area-inset-right)',
                WebkitOverflowScrolling: 'touch',
            }}
        >
            <div className="w-full max-w-[393px] h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;
