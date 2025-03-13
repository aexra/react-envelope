import css from './IconLabel.module.css';

function IconLabel({ ref, className, style, text = "Label", src, iconContent, gradStart = "var(--dstu-dark-blue)", gradEnd = "var(--dstu-blue)" }) {
    return (
        <div ref={ref} 
             className={`${className} ${css.label}`} 
             style={{background: `linear-gradient(0.25turn, ${gradStart}, ${gradEnd})`, ...style}}>
            {iconContent ?? <img className={css.icon} src={src} alt="Icon"/>}
            <span>{text}</span>
        </div>
    );
}

export default IconLabel;