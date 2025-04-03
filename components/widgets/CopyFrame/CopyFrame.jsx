import toast from 'react-hot-toast';
import css from './CopyFrame.module.css';
import { useClipboard } from '../../../hooks/useClipboard';

export const CopyFrame = ({ ref, className, src, children }) => {
    const { copy } = useClipboard();

    const handleCopy = () => {
        copy(src,
            () => toast.success('Скопировано!'),
            () => toast.error('Ошибка при копировании'),
            () => toast.error('Нечего копировать')
        );
    };

    return (
        <div ref={ref} className={`${css.cf} ${className} pad5 r10 flex row center pointer`} onClick={handleCopy}>
            {children}
        </div>
    );
};