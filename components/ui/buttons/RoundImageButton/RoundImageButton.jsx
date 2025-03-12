import css from './RoundImageButton.module.css';

function RoundImageButton({ ref, className, style, image, imageClassName, alt = "Button", onClick }) {
    return (
        <button ref={ref}
                className={`${className} ${css.button} darker-hover darker-active`}
                style={style}
                onClick={onClick}>
            <img className={`${css.img} ${imageClassName}`} src={image} alt={alt}/>
        </button>
    );
}

export default RoundImageButton;