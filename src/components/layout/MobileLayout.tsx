interface MobileLayoutProps {
    children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div
            className="w-[393px] h-[852px] rounded-[24px] bg-[#1F1F1F] text-white mx-auto overflow-hidden"
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            {children}
        </div>
    );
};

export default MobileLayout;
