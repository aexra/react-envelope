import { useEffect, useRef, useState } from 'react';
import { ExpandMore } from '../../dummies/Icons';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import ExButton from '../../ui/buttons/ExButton/ExButton';
import css from './Expander.module.css';

export const Expander = ({
    ref, 
    className, 
    headerContent, 
    children, 
    expanded = false
}) => {
    const [isExpanded, setExpanded] = useState(expanded);
    const [height, setHeight] = useState(0);
    const bodyRef = useRef(null);

    useEffect(() => {
        if (isExpanded && bodyRef.current) {
            // Устанавливаем высоту содержимого при раскрытии
            setHeight(bodyRef.current.scrollHeight);
        } else {
            // Сбрасываем высоту при сворачивании
            setHeight(0);
        }
    }, [isExpanded]);

    useEffect(() => {
        if (expanded !== isExpanded) {
            setExpanded(expanded);
        }
    }, [expanded]);

    return (
        <VBoxPanel ref={ref}
                   className={`${className} ${css.expander} r10 pad10`}>
            <HBoxPanel valign='center'
                       className={`${css.header}`}>
                {headerContent}
                <ExButton className={`${css.expandButton} textbutton h-last`}
                          onClick={() => setExpanded(!isExpanded)}>
                    <ExpandMore className={`icon-g ${isExpanded ? css.rotate : ''}`} />
                </ExButton>
            </HBoxPanel>
            <VBoxPanel className={`${css.body}`}
                       ref={bodyRef}
                       style={{ maxHeight: `${height}px`, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                {children}
            </VBoxPanel>
        </VBoxPanel>
    );
};