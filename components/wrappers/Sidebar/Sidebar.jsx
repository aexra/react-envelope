import { useEffect, useState } from 'react';
import css from './Sidebar.module.css';
import { DimOverlay } from '../../ui/misc/DimOverlay/DimOverlay';

// mode = 0: sidebar activates on hover
// mode = 1: sidebar must be activated manually
// peek is used for mode = 0
// side: 0 is left and 1 is right
export const Sidebar = ({
    ref,
    className,
    children,
    mode = 0,
    side = 0,
    peek = 'var(--sidebar-width)',
    fullSize = 'var(--sidebar-hover-width)',
    active = false,
    onMinimized,
    onMaximized,
    onStateChanged
}) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        setActive(active);
    }, [active]);

    useEffect(() => {
        if (!isActive && onMinimized) onMinimized();
        if (isActive && onMaximized) onMaximized();
        if (onStateChanged) onStateChanged(isActive);
    }, [isActive]);

    const handleHover = (e) => {
        if (mode === 0) setActive(e || active);
    };

    return (
        <>
            <div ref={ref}
                className={`${className} ${css.sidebar} ${side === 0 ? css.l : css.r}`}
                style={{
                    width: isActive ? fullSize : mode === 0 ? peek : '0',
                }}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}>
                {children}
            </div>
            <DimOverlay active={isActive}
                        onClick={() => setActive(false)}/>
        </>
    );
};