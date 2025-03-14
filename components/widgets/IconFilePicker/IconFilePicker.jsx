import css from './IconFilePicker.module.css';
import defaultUserIcon from '../../../assets/images/user-b.png';
import selectImageIcon from '../../../assets/images/edit.png';
import { useEffect, useRef, useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import { Pencil, UserFilled } from '../../dummies/Icons';

export const IconFilePicker = ({ ref, className, onFilePicked, icon, readOnly = false }) => {
    const [imageSource, setImageSource] = useState(icon ? icon : defaultUserIcon);
    const [isEmpty, setIsEmpty] = useState(true);
    const inputRef = useRef(null);

    const handleEditClick = (e) => {
        inputRef.current.click();
    };

    useEffect(() => {
        if (imageSource == defaultUserIcon) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }, [imageSource])

    const handleImageSelection = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (args) => {
                setImageSource(args.target.result)
            };
            reader.readAsDataURL(file);
            if (onFilePicked) onFilePicked(file);
            inputRef.current.value = "";
        } else {
            // TODO: Добавить уведомление
        }
    }

    return (
        <VBoxPanel ref={ref}
                   className={`${className} ${css.container} round`}
                   halign='center'
                   valign='center'>
            <UserFilled className={`${css.image} ${!isEmpty && css.setIcon}`}/>
            { !readOnly &&
                <div className={`${css.addImageContainer}`} onClick={handleEditClick}>
                    <Pencil className={`${css.addImage} white`}/>
                    <input ref={inputRef}
                        type="file"
                        onChange={(e) => handleImageSelection(e)}
                        className={`${css.iInput}`}
                        accept='image/*'/>
                </div>
            }
        </VBoxPanel>
    );
};