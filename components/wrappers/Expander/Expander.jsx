import { useEffect, useRef, useState } from 'react';
import { ExpandMore } from '../../dummies/Icons';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import ExButton from '../../ui/buttons/ExButton/ExButton';
import css from './Expander.module.css';
import HDivider from '../../ui/dividers/HDivider/HDivider';

export const Expander = ({
    ref, 
    className, 
    headerContent, 
    children,
    dividerStyle,
    expanded = false
}) => {
    const [isExpanded, setExpanded] = useState(expanded);
    const [height, setHeight] = useState(0);
    const bodyRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        if (isExpanded && bodyRef.current) {
            setHeight(bodyRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isExpanded]);

    useEffect(() => {
        if (expanded !== isExpanded) {
            setExpanded(expanded);
        }
    }, [expanded]);

    useEffect(() => {
        if (bodyRef.current) {
            const observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    if (isExpanded) {
                        setHeight(bodyRef.current.scrollHeight);
                    }
                }
            });

            observer.observe(bodyRef.current);
            observerRef.current = observer;

            return () => {
                if (observerRef.current) {
                    observerRef.current.disconnect();
                }
            };
        }
    }, [isExpanded]);

    return (
        <VBoxPanel ref={ref}
                   className={`${className} ${css.expander} r10 ${isExpanded && css.expanded}`}>
            <ExButton className={`${css.header} textbutton`}
                        onClick={() => setExpanded(!isExpanded)}>
                <h4 className='m-0'>{headerContent}</h4>
                <ExpandMore className={`icon-g h-last ${css.expandButton} ${isExpanded && css.rotate}`} />
            </ExButton>
            <VBoxPanel className={`${css.body}`}
                       ref={bodyRef}
                       style={{ maxHeight: `${height}px` }}>
                <HDivider margin='0' color={dividerStyle.color} thickness={dividerStyle.thickness}/>
                <div className={'pad10'}>
                    {children}
                </div>
            </VBoxPanel>
        </VBoxPanel>
    );
};