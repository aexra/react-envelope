import { useState } from 'react';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import css from './UserGeneralPanel.module.css';
import { EditSelfModal } from '../../modals/EditSelfModal/EditSelfModal';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import { IconFilePicker } from '../../../ui/input/IconFilePicker/IconFilePicker';
import { useAuth } from '../../../../hooks/useAuth';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import HDivider from '../../../ui/dividers/HDivider/HDivider';
import { UserDataPanel } from '../UserDataPanel/UserDataPanel';
import { url } from '../../../../../api/image';
import { User } from '../../../dummies/Icons';

export const UserGeneralPanel = ({
    ref,
    className,
    edit = false
}) => {
    const [isEditUserModalActive, setIEUMA] = useState(false);
    const { auth, user } = useAuth();

    const handleUserEdit = () => {
        setIEUMA(true);
    };

    return (
        <VBoxPanel ref={ref}
                   className={`${className} ${css.panel} h-full r10`} gap='20px'>
            <HBoxPanel className={``} valign='center' gap='50px'>
                {user?.avatarId ? <IconFilePicker readOnly className={`${css.avatar}`} src={url(user.avatarId)}/> : <User className={`${css.avatar}`}/>}
                <span className={css.title}>{user?.tag}</span>
                {edit && <ExButton className={`accent-button h-last ${css.globalEdit}`}
                          onClick={handleUserEdit}>Редактировать профиль пользователя</ExButton>}
            </HBoxPanel>

            <HDivider/>

            <HBoxPanel gap='20px'>
                <UserDataPanel edit={edit} className={`flex-1`} onChangeClick={handleUserEdit}/>
                <VBoxPanel className={`flex-1`}>

                </VBoxPanel>
            </HBoxPanel>
            <EditSelfModal isEnabled={isEditUserModalActive}
                           onCloseRequested={() => setIEUMA(false)}/>
        </VBoxPanel>
    );
};