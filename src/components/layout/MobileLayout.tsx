import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div
            className="w-full min-h-screen bg-[#1F1F1F] text-white flex justify-center"
            style={{
                fontFamily: 'Inter, sans-serif',
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)',
                paddingLeft: 'env(safe-area-inset-left)',
                paddingRight: 'env(safe-area-inset-right)',
                overflowX: 'hidden',
                overflowY: 'hidden',
            }}
        >
            <div
                className="w-full max-w-[393px] h-full relative overflow-hidden"
            >
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;
