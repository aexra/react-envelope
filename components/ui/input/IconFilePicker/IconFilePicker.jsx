import css from './IconFilePicker.module.css';
import { useEffect, useRef, useState } from 'react';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import { Pencil, UserFilled } from '../../../dummies/Icons';

const defaultUserIcon = <UserFilled/>;

export const IconFilePicker = ({ ref, className, onFilePicked, src, readOnly = false }) => {
    const [imageSource, setImageSource] = useState(src);
    const [isEmpty, setIsEmpty] = useState(true);
    const inputRef = useRef(null);

    const handleEditClick = (e) => {
        inputRef.current.click();
    };

    useEffect(() => {
        if (imageSource) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
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
            {isEmpty ? <UserFilled className={`${css.image} ${!isEmpty && css.setIcon}`}/> : <img src={imageSource} className={`${css.image} ${!isEmpty && css.setIcon}`}/>}
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