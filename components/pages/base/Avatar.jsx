import { url } from "../../../../api/image";
import { useAuth } from "../../../hooks/useAuth";
import { User } from "../../dummies/Icons";
import css from './base.module.css';

export const Avatar = ({
    className,
    ...props
}) => {
    const { user } = useAuth();

    return (
        user?.avatarId ? <img className={`${className} ${css.avatar}`} src={url(user.avatarId)} alt="Avatar" {...props} /> : 
        <User className={`${className}`} {...props} />
    );
};