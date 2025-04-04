import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import ExTextBox from '../../../ui/input/text/ExTextBox/ExTextBox';
import { Modal } from '../../../wrappers/Modal/Modal';
import { IconFilePicker } from '../../../ui/input/IconFilePicker/IconFilePicker';
import css from './EditSelfModal.module.css';
import { useEffect, useRef, useState } from 'react';
import { update, updateavatar } from '../../../../../api/user';
import { useAuth } from '../../../../hooks/useAuth';
import { Email, Envelope, User } from '../../../dummies/Icons';
import toast from 'react-hot-toast';

export const EditSelfModal = ({
    ref,
    className,
    onCloseRequested,
    isEnabled
}) => {
    const { auth, user, refresh } = useAuth();

    const [lnValue, setlnValue] = useState();
    const [fnValue, setfnValue] = useState();
    const [mnValue, setmnValue] = useState();
    const [email, setEmail] = useState();
    const [tag, setTag] = useState();
    const [icon, setIcon] = useState();

    const [vs1, setvs1] = useState(true);
    const [vs2, setvs2] = useState(true);
    const [vs3, setvs3] = useState(true);
    const [vs4, setvs4] = useState(true);
    const [vs5, setvs5] = useState(true);

    const handleUpdate = async () => {
        try {
            if (vs1 && vs2 && vs3 && vs4 && vs5) {
                await update({
                    ...user,
                    lastname: lnValue,
                    firstname: fnValue,
                    middlename: mnValue,
                    email: email,
                    tag: tag
                });

                console.log(icon);

                if (icon) await updateavatar(icon);

                onCloseRequested();
                
                refresh();

                toast.success(`Сохранено`);
            } else {
                toast.error(`Необходимо заполнить все поля`);
            }
        } catch (ex) {
            toast.error(`Ошибка сети`);
            console.log(ex);
        }
    };

    const handleIconPicked = (file) => {
        setIcon(file);
    };

    const setDefault = () => {
        setlnValue(user?.lastname);
        setfnValue(user?.firstname);
        setmnValue(user?.middlename);
        setEmail(user?.email);
        setTag(user?.tag);
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
               height='650px'
               className={className}
               ref={ref}
               onPrimaryClick={handleUpdate}>
            <VBoxPanel style={{height: '100%'}}>
                <HBoxPanel gap='10px'
                            halign='center'
                            valign='stretch'>
                    <IconFilePicker className={css.iconPicker} onFilePicked={handleIconPicked}/>
                </HBoxPanel>
                <VBoxPanel gap='15px'
                           padding='10px'
                           className={css.datacontainer}>
                    <ExTextBox hint='Email' 
                               icon={<Envelope/>}
                               regex="."
                               placeholder="Введите почту"
                               text={email}
                               onValidationStateChanged={setvs4}
                               textChanged={setEmail}/>
                    <ExTextBox hint='Tag' 
                               icon={<Email/>}
                               regex="."
                               placeholder="Введите тег"
                               text={tag}
                               onValidationStateChanged={setvs5}
                               textChanged={setTag}/>
                    <ExTextBox hint='Фамилия' 
                               icon={<User/>}
                               regex="."
                               placeholder="Введите фамилию"
                               text={lnValue}
                               onValidationStateChanged={(e) => setvs1(e)}
                               textChanged={(e) => setlnValue(e)}/>
                    <ExTextBox hint='Имя' 
                               icon={<User/>}
                               regex="."
                               placeholder="Введите имя"
                               text={fnValue}
                               onValidationStateChanged={(e) => setvs2(e)}
                               textChanged={(e) => setfnValue(e)}/>
                    <ExTextBox hint='Отчество' 
                               icon={<User/>}
                               placeholder="Введите отчество"
                               text={mnValue}
                               onValidationStateChanged={(e) => setvs3(e)}
                               textChanged={(e) => setmnValue(e)}/>
                </VBoxPanel>
            </VBoxPanel>
        </Modal>
    );
};