import { type ReactNode } from 'react';
import Navbar from './Navbar';
import ClickSpark from './ClickSpark';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <ClickSpark
            sparkColor="#b8f2e6"
            sparkSize={12}
            sparkRadius={20}
            sparkCount={8}
            duration={400}
        >
            <div className="min-h-screen flex flex-col bg-[#1c1c1c]">
                <Navbar />
                <main className="flex-1 pt-16">
                    {children}
                </main>
            </div>
        </ClickSpark>
    );
};

export default Layout;
