import css from './StatusTag.module.css';

export const StatusTag = ({ ref, className, type, children, text }) => {
    var cl = null;

    switch (type) {
        case 'success':
            cl = css.success
            break;
        case 'warning':
            cl = css.warning
            break;
        case 'error':
            cl = css.error;
            break;
        default:
            cl = css.info;
            break;
    }
    
    return (
        <span className={`${className} ${cl} ${css.tag} pad5 padh10 r10 bold c-w`}>{text ?? children}</span>
    );
}