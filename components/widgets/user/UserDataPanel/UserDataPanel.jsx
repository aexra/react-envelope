import { useAuth } from '../../../../hooks/useAuth';
import { Pair } from '../../../layouts/Pair/Pair';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import ExTextBox from '../../../ui/input/ExTextBox/ExTextBox';
import css from './UserDataPanel.module.css';

export const UserDataPanel = ({ ref, className, edit = false, onChangeClick }) => {
    const { auth } = useAuth();
    
    return (
        <VBoxPanel ref={ref} className={`${className} ${css.panel} panel pad20`} gap='10px'>
            <Pair left={<ExTextBox borderless readOnly hintClassName={`${css.tbhint} uppercase bold`} hint={'Фамилия'} text={auth?.lastname}/>}
                  right={edit && <ExButton className={`flex-0-1 center-self h-last`} onClick={onChangeClick}>Изменить</ExButton>}/>
            <Pair left={<ExTextBox borderless readOnly hintClassName={`${css.tbhint} uppercase bold`} hint={'Имя'} text={auth?.firstname}/>}
                  right={edit && <ExButton className={`flex-0-1 center-self h-last`} onClick={onChangeClick}>Изменить</ExButton>}/>
            <Pair left={<ExTextBox borderless readOnly hintClassName={`${css.tbhint} uppercase bold`} hint={'Отчество'} text={auth?.middlename}/>}
                  right={edit && <ExButton className={`flex-0-1 center-self h-last`} onClick={onChangeClick}>Изменить</ExButton>}/>
        </VBoxPanel>
    );
};