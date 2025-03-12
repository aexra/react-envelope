export const SVG = ({ ref, className, src, onClick }) => {
    return (
        <div ref={ref} 
             className={`${className}`} 
             style={{
                WebkitMask: `url(${src}) no-repeat center`,
                mask: `url(${src}) no-repeat center`,
             }}
             onClick={onClick}></div>
    );
};