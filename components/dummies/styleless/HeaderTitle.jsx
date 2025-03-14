export const HeaderTitle = ({ ref, className, text, icon }) => {
    return (
        <span ref={ref} 
              className={`flex row center g10 ${className}`}><div className="icon-m">{icon}</div>{text}</span>
    )
};