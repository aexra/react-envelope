import { useNavigation } from "../../../hooks/useNavigation";

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
        <div className={`${className} flex row g10 center`}>
            <h3>{_text}</h3>
            <div className="icon-m">{_icon}</div>
        </div>
    );
};