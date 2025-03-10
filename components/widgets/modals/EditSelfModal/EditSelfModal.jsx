import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import ExTextBox from '../../../ui/input/ExTextBox/ExTextBox';
import { Modal } from '../../../wrappers/Modal/Modal';
import { IconFilePicker } from '../../IconFilePicker/IconFilePicker';
import css from './EditSelfModal.module.css';
import userIcon from '../../../../assets/images/user.png';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../../utils/contexts/AuthContext';
import { update } from '../../../../api/user';
import { UtilsContext } from '../../../../utils/contexts/UtilsContext';

export const EditSelfModal = ({
    ref,
    className,
    onCloseRequested,
    isEnabled
}) => {
    const { auth } = useContext(AuthContext);
    const { refreshAuth } = useContext(UtilsContext);

    const lnRef = useRef(null);
    const fnRef = useRef(null);
    const mnRef = useRef(null);

    const [lnValue, setlnValue] = useState();
    const [fnValue, setfnValue] = useState();
    const [mnValue, setmnValue] = useState();

    const [vs1, setvs1] = useState(true);
    const [vs2, setvs2] = useState(true);
    const [vs3, setvs3] = useState(true);

    const handleUpdate = async () => {
        if (vs1 && vs2 && vs3) {
            await update({
                lastname: lnRef.current.value,
                firstname: fnRef.current.value,
                middlename: mnRef.current.value
            });

            refreshAuth();

            onCloseRequested();

            // TODO: Уведомление
        } else {
            // TODO: Уведомление
        }
    };

    const setDefault = () => {
        setlnValue(auth?.data?.lastname);
        setfnValue(auth?.data?.firstname);
        setmnValue(auth?.data?.middlename);
    };

    useEffect(() => {
        setDefault();
    }, [isEnabled])

    return (
        <Modal isEnabled={isEnabled}
               onCloseRequested={onCloseRequested}
               title='Редактировать профиль'
               closeButtonText='Отмена'
               primaryButtonText='Применить'
               width='400px'
               height='490px'
               className={className}
               ref={ref}
               onPrimaryClick={handleUpdate}>
            <VBoxPanel style={{height: '100%'}}>
                <HBoxPanel gap='10px'
                            halign='center'
                            valign='stretch'>
                    <IconFilePicker className={css.iconPicker}/>
                </HBoxPanel>
                <VBoxPanel gap='10px'
                           padding='10px'
                           className={css.datacontainer}>
                    <ExTextBox hint='Фамилия' 
                               icon={userIcon}
                               inputRef={lnRef}
                               regex="."
                               placeholder="Введите фамилию"
                               text={lnValue}
                               onValidationStateChanged={(e) => setvs1(e)}
                               textChanged={(e) => setlnValue(e)}/>
                    <ExTextBox hint='Имя' 
                               icon={userIcon}
                               inputRef={fnRef}
                               regex="."
                               placeholder="Введите имя"
                               text={fnValue}
                               onValidationStateChanged={(e) => setvs2(e)}
                               textChanged={(e) => setfnValue(e)}/>
                    <ExTextBox hint='Отчество' 
                               icon={userIcon}
                               inputRef={mnRef}
                               placeholder="Введите отчество"
                               text={mnValue}
                               onValidationStateChanged={(e) => setvs3(e)}
                               textChanged={(e) => setmnValue(e)}/>
                </VBoxPanel>
            </VBoxPanel>
        </Modal>
    );
};