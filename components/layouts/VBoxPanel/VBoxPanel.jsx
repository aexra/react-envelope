import css from './VBoxPanel.module.css';

function VBoxPanel({
    onClick,
    hoverChanged,
    ref,
    children,
    gap,
    padding,
    margin,
    valign = "stretch",
    halign = "stretch",
    className,
    style
}) {
    const styles = {
        gap: gap,
        padding: padding,
        margin: margin,
        justifyContent: valign,
        alignItems: halign,
        ...style
    };

    const handleMouseEnter = () => {
        if (hoverChanged) hoverChanged(true);
    };
    
    const handleMouseLeave = () => {
        if (hoverChanged) hoverChanged(false);
    };
    
    return (
        <div ref={ref}
             className={`${css.panel} ${className}`}
             style={styles}
             onClick={onClick}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>{children}</div>
    );
}

export default VBoxPanel;