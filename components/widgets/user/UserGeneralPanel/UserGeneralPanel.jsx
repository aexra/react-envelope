import { useState } from 'react';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import css from './UserGeneralPanel.module.css';
import { EditSelfModal } from '../../modals/EditSelfModal/EditSelfModal';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import { IconFilePicker } from '../../IconFilePicker/IconFilePicker';
import { useAuth } from '../../../../hooks/useAuth';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import HDivider from '../../../ui/dividers/HDivider/HDivider';
import ExTextBox from '../../../ui/input/ExTextBox/ExTextBox';
import { UserDataPanel } from '../UserDataPanel/UserDataPanel';

export const UserGeneralPanel = ({
    ref,
    className,
    canEdit = false
}) => {
    const [isEditUserModalActive, setIEUMA] = useState(false);
    const { auth } = useAuth();

    const handleUserEdit = () => {
        setIEUMA(true);
    };

    return (
        <VBoxPanel ref={ref}
                   className={`${className} ${css.panel} panel h-full`} gap='20px'>
            <HBoxPanel className={``} valign='center' gap='50px'>
                <IconFilePicker readOnly className={`${css.avatar}`}/>
                <h1>{auth?.login}</h1>
                <ExButton className={`dstu-accent-button h-last ${css.globalEdit}`}
                          onClick={handleUserEdit}>Редактировать профиль пользователя</ExButton>
            </HBoxPanel>

            <HDivider/>

            <HBoxPanel gap='20px'>
                <UserDataPanel edit className={`flex-1`} onChangeClick={handleUserEdit}/>
                <VBoxPanel className={`flex-1`}>

                </VBoxPanel>
            </HBoxPanel>
            <EditSelfModal isEnabled={isEditUserModalActive}
                           onCloseRequested={() => setIEUMA(false)}/>
        </VBoxPanel>
    );
};