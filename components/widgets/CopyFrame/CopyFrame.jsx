import css from './CopyFrame.module.css';

export const CopyFrame = ({ ref, className, src, children }) => {
    const handleCopy = () => {
        
    };
    
    return (
        <div ref={ref} className={`${css.cf} ${className}`} onClick={handleCopy}>
            {children}
        </div>
    );
};