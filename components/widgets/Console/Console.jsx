import { useRef, useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './Console.module.css';
import TransparentTextBox from '../../ui/input/TransparentTextBox/TransparentTextBox';

export const Console = ({ ref, className, onSubmit }) => {
    const [prompts, setPrompts] = useState([]);
    
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        if (e != "") {
            inputRef.current.value = "";
            if (onSubmit) {
                const response = onSubmit(e);
                if (response && response != "") setPrompts([...prompts, ...[{
                    msg: `> ${e}`,
                    type: `default`
                }, response]]);
                else setPrompts([...prompts, {
                    msg: `> ${e}`,
                    type: `default`
                }]);
            } else {
                setPrompts([...prompts, {
                    msg: `> ${e}`,
                    type: `default`
                }]);
            }
            console.log(prompts);
        }
    };

    const mapTypeToClass = (type) => {
        switch (type) {
            case 'success': return css.success;
            case 'warning': return css.warning;
            case 'error': return css.error;
            default: return css.default;
        }
    };

    return (
        <VBoxPanel ref={ref}
                   className={`panel ${className} ${css.console}`}>
            <VBoxPanel className={`${css.prompts}  y-scroll`} valign='end'>
                {prompts.map((p, i) => <span key={i} className={`${css.prompt} ${mapTypeToClass(p.type)}`}>{p.msg}</span>)}
            </VBoxPanel>
            <TransparentTextBox className={css.line}
                                placeholder={'>'}
                                onSubmit={handleSubmit}
                                ref={inputRef}/>
            {prompts.length > 0 && <button className={css.clear} onClick={() => setPrompts([])}>Очистить</button>}
        </VBoxPanel>
    );
};