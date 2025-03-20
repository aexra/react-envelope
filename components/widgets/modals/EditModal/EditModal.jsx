import { FC } from 'react';
import ExTextBox from '../../../ui/input/ExTextBox/ExTextBox';
import { Modal } from '../../../wrappers/Modal/Modal';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import css from './EditModal.module.css';

// interface IEditContextItem {
//     hint: string;
//     placeholder: string;
//     text: string;
// };

// interface IEditModalProps {
//     ref: any;
//     className: string;
//     isEnabled: boolean;
//     onCloseRequested: () => {};
//     title: string;
//     editContext: IEditContextItem[]
// };

// export const EditModal: FC<IEditModalProps> = ({
export const EditModal = ({
    ref,
    className,
    isEnabled,
    onCloseRequested,
    title,
    editContext,
    height = '400px',
    width = '500px',
    onPrimaryClick,
    onCloseClick
}) => {
    return (
        <Modal ref={ref}
               className={`${className}`}
               isEnabled={isEnabled}
               onCloseRequested={onCloseRequested}
               primaryButtonText={'Применить'}
               closeButtonText={'Отмена'}
               title={title}
               height={height}
               width={width}
               onPrimaryClick={onPrimaryClick}
               onCloseClick={onCloseClick}>
            <VBoxPanel className='pad10' gap={'10px'}>
                {editContext.map((e, i) => (
                    <ExTextBox hint={e.hint}
                               placeholder={e.placeholder}
                               text={e.text}
                               textChanged={e.changed}
                               key={i}/>
                ))}
            </VBoxPanel>
        </Modal>
    );
};