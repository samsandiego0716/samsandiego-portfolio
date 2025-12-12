import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState('fade-in');

    useEffect(() => {
        if (children !== displayChildren) {
            setTransitionStage('fade-out');
        }
    }, [children, displayChildren]);

    const handleTransitionEnd = () => {
        if (transitionStage === 'fade-out') {
            setDisplayChildren(children);
            setTransitionStage('fade-in');
        }
    };

    return (
        <div
            className={`page-transition ${transitionStage}`}
            onAnimationEnd={handleTransitionEnd}
            key={location.pathname}
        >
            {transitionStage === 'fade-out' ? displayChildren : children}
        </div>
    );
};

export default PageTransition;
