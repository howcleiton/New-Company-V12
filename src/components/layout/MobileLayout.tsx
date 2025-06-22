import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div
            className="min-h-[100dvh] w-full bg-[#1F1F1F] text-white overflow-hidden flex justify-center"
            style={{
                fontFamily: 'Inter, sans-serif',
                paddingBottom: 'env(safe-area-inset-bottom)',
                paddingTop: 'env(safe-area-inset-top)',
                paddingLeft: 'env(safe-area-inset-left)',
                paddingRight: 'env(safe-area-inset-right)',
            }}
        >
            <div className="w-[393px] h-[852px] md:rounded-[24px] overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;
