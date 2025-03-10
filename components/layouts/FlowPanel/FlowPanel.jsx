import css from './FlowPanel.module.css';

function FlowPanel({
    onClick,
    hoverChanged,
    ref,
    children,
    gap,
    padding,
    margin,
    className,
    style
}) {
    const styles = {
        gap: gap,
        padding: padding,
        margin: margin,
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
             className={`${className} ${css.flow}`}
             style={styles}
             onClick={onClick}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>{children}</div>
    );
}

export default FlowPanel;