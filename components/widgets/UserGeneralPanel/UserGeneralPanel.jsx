import { useState } from 'react';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import css from './UserGeneralPanel.module.css';
import { EditSelfModal } from '../modals/EditSelfModal/EditSelfModal';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import { IconFilePicker } from '../IconFilePicker/IconFilePicker';

export const UserGeneralPanel = ({
    ref,
    className,
    canEdit = false
}) => {
    const [isEditUserModalActive, setIEUMA] = useState(false);

    return (
        <HBoxPanel ref={ref}
                   className={`${className} ${css.panel} panel h-full`}>
            <VBoxPanel className={`${css.avatarGroup}`}
                       halign='center' valign='start'>
                <IconFilePicker/>
            </VBoxPanel>
            <VBoxPanel className={`${css.dataGroup} flex-1`}>

            </VBoxPanel>
            <EditSelfModal isEnabled={isEditUserModalActive}
                           onCloseRequested={() => setIEUMA(false)}/>
        </HBoxPanel>
    );
};