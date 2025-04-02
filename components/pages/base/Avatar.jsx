import { url } from "../../../../api/image";
import { useAuth } from "../../../hooks/useAuth";

export const Avatar = ({
    className,
    ...props
}) => {
    const { user } = useAuth();

    return (
        <img className={`${className}`} src={url(user.avatarId)} alt="Avatar" {...props}/>
    );
};