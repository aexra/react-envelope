import toast from 'react-hot-toast';
import css from './CopyFrame.module.css';

export const CopyFrame = ({ ref, className, src, children }) => {
    const handleCopy = () => {
        if (src && src != "") {
            navigator.clipboard.writeText(src).then(function() {
                toast.success('Скопировано!');
            }).catch(function(error) {
                toast.error('Ошибка при копировании');
            });
        } else {
            toast.error('Нечего копировать');
        }
    };
    
    return (
        <div ref={ref} className={`${css.cf} ${className} pad5 r10 flex row center`} onClick={handleCopy}>
            {children}
        </div>
    );
};