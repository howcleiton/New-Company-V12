import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div
            className="w-full min-h-[100dvh] bg-[#1F1F1F] text-white flex justify-center items-center overflow-hidden"
            style={{
                fontFamily: 'Inter, sans-serif',
                paddingBottom: 'env(safe-area-inset-bottom)',
                paddingTop: 'env(safe-area-inset-top)',
                paddingLeft: 'env(safe-area-inset-left)',
                paddingRight: 'env(safe-area-inset-right)',
            }}
        >
            <div className="w-full max-w-[393px] h-full relative overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;
