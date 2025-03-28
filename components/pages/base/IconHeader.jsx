import { useNavigation } from "../../../hooks/useNavigation";
import css from './base.module.css';

export const IconHeader = ({
    className,
    text,
    icon
}) => {
    const { routes } = useNavigation();

    const foundRoute = routes.find(r => r.to == window.location.pathname);
    const _text = text ?? foundRoute?.name ?? '[[NOT FOUND]]';
    const _icon = icon ?? foundRoute?.props?.icon ?? '[[NOT FOUND]]';

    return (
        <div className={`${className} ${css.header} flex row g10 center`}>
            <div className="icon-m">{_icon}</div>
            <span className={`h2`}>{_text}</span>
        </div>
    );
};