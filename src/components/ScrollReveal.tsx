import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleUp';
    delay?: number;
    className?: string;
}

const ScrollReveal = ({
    children,
    variant = 'fadeUp',
    delay = 0,
    className = ''
}: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Apply delay as transition-delay
        if (delay > 0) {
            el.style.transitionDelay = `${delay}ms`;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(el);

        return () => {
            observer.unobserve(el);
        };
    }, [delay]);

    const variantClass = {
        fadeUp: '',
        fadeLeft: 'from-left',
        fadeRight: 'from-right',
        scaleUp: 'scale-up'
    }[variant];

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${variantClass} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
