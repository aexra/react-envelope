import css from './DimOverlay.module.css';

export const DimOverlay = ({
    ref,
    className,
    dim = 0.5,
    active = false,
    z = 'var(--sidebar-dim-z)',
    pointerEvents = 'all',
    disabledPointerEvents = 'none',
    onMouseEnter,
    onMouseLeave,
    onClick,
}) => {
    return (
        <div ref={ref}
             className={`${className} ${css.dim} ${active ? css.active : ''}`}
             style={{
                zIndex: z,
                backgroundColor: `rgba(0, 0, 0, ${dim})`,
                pointerEvents: active ? pointerEvents : disabledPointerEvents
             }}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             onClick={onClick}></div>
    );
};