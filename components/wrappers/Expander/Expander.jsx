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

    const componentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (componentRef.current) {
            const observer = new ResizeObserver(entries => {
                for (let entry of entries) {
                    setHeight(entry.contentRect.height);
                }
            });

            observer.observe(componentRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, []);
    
    return (
        <VBoxPanel ref={ref}
                   className={`${className} ${css.expander} r10 pad10`}>
            <HBoxPanel valign='center'
                       className={`${css.header}`}>
                {headerContent}
                <ExButton className={`${css.expandButton} textbutton h-last`}
                          onClick={() => setExpanded(!isExpanded)}><ExpandMore className='icon-g'/></ExButton>
            </HBoxPanel>
            <VBoxPanel className={`${css.body} ${isExpanded && css.expanded}`}
                       ref={componentRef}>
                { children }
            </VBoxPanel>
        </VBoxPanel>
    );
};