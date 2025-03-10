import { useRef, useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './Console.module.css';
import TransparentTextBox from '../../ui/input/TransparentTextBox/TransparentTextBox';

export const Console = ({ ref, className, onSubmit }) => {
    const [prompts, setPrompts] = useState([]);
    
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        if (e != "") {
            setPrompts(prompts.concat([`> ${e}`]));
            inputRef.current.value = "";
            if (onSubmit) onSubmit(e, handleCallback);
        }
    };

    const handleCallback = (e) => {
        setPrompts(prompts.concat([`> ${e}`]));
    };

    return (
        <VBoxPanel ref={ref}
                   className={`panel ${className} ${css.console}`}>
            <VBoxPanel className={`${css.prompts}  y-scroll`} valign='end'>
                {prompts.map((p, i) => <span key={i} className={`${css.prompt}`}>{p}</span>)}
            </VBoxPanel>
            <TransparentTextBox className={css.line}
                                placeholder={'>'}
                                onSubmit={handleSubmit}
                                ref={inputRef}/>
            {prompts.length > 0 && <button className={css.clear} onClick={() => setPrompts([])}>Очистить</button>}
        </VBoxPanel>
    );
};