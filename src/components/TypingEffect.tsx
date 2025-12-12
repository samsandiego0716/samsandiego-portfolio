import { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

const TypingEffect = ({
    text,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 2000,
    className = ''
}: TypingEffectProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

    useEffect(() => {
        const i = loopNum % text.length;
        const fullText = text[i];

        const handleTyping = () => {
            setDisplayText(prev => isDeleting
                ? fullText.substring(0, prev.length - 1)
                : fullText.substring(0, prev.length + 1)
            );

            setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeedState);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, text, typingSpeed, deletingSpeed, pauseDuration, typingSpeedState]);

    const isTyping = isDeleting || (displayText !== text[loopNum % text.length] && displayText !== '');

    return (
        <span className={`${className} inline-block`}>
            {displayText}
            <span className={`typing-cursor ${!isTyping ? 'blinking' : ''}`}>|</span>
        </span>
    );
};

export default TypingEffect;
