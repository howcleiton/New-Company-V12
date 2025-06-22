import React from 'react';

interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div
            className="fixed inset-0 flex justify-center items-center bg-[#1F1F1F] text-white overflow-hidden"
            style={{
                fontFamily: 'Inter, sans-serif',
                paddingBottom: 'env(safe-area-inset-bottom)',
                paddingTop: 'env(safe-area-inset-top)',
                paddingLeft: 'env(safe-area-inset-left)',
                paddingRight: 'env(safe-area-inset-right)',
            }}
        >
            <div className="w-[393px] h-[852px] overflow-hidden md:rounded-[24px]">
                {children}
            </div>
        </div>
    );
};

export default MobileLayout;
