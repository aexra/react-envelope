import { useEffect, useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import { DimOverlay } from '../../ui/misc/DimOverlay/DimOverlay';
import css from './Modal.module.css';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import closeIcon from '../../../assets/images/close.png';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import ExButton from '../../ui/buttons/ExButton/ExButton';

export const Modal = ({
    ref,
    className,
    onCloseRequested,
    isEnabled = false,
    children,
    height = '400px',
    width = '500px',
    z = 'var(--modal-z1)',
    title,
    primaryButtonText,
    onPrimaryClick,
    secondaryButtonText,
    onSecondaryClick,
    closeButtonText,
    defaultButton = 0,
    customButtonsPanel,
    bodyClassName
}) => {
    const [isDimmed, setDimming] = useState(false);

    const handleCloseRequest = () => {
        if (onCloseRequested) onCloseRequested();
    };

    useEffect(() => {
        setDimming(isEnabled);
    }, [isEnabled]);

    return (
        <>
            {isEnabled && <VBoxPanel gap='10px'
                                     ref={ref}
                                     className={`${className} panel ${css.modal}`}
                                     style={{
                                        height: height,
                                        width: width,
                                        top: `calc(50vh - ${height} / 2)`,
                                        left: `calc(50vw - ${width} / 2)`,
                                        zIndex: z
                                     }}>
                <HBoxPanel halign='center'
                           valign='center'
                           className={`${css.headerContainer}`}>
                    <h3>{title}</h3>
                    <RoundImageButton image={closeIcon}
                                      className={`${css.crossCloseButton}`}
                                      onClick={handleCloseRequest}/>
                </HBoxPanel>
                <div className={`${bodyClassName} ${css.body}`}>
                    {children}
                </div>
                {customButtonsPanel ? customButtonsPanel : <HBoxPanel gap='10px'
                                                                      className={`${css.buttons}`}
                                                                      halign='end'>
                    {primaryButtonText && <ExButton onClick={() => {if (onPrimaryClick) onPrimaryClick()}}
                                                    className={`${css.button} ${defaultButton !== 0 && css.generalButton}`}>{primaryButtonText}</ExButton>}
                    {secondaryButtonText && <ExButton onClick={() => {if (onSecondaryClick) onSecondaryClick()}}
                                                      className={`${css.button} ${defaultButton !== 1 && css.generalButton}`}>{secondaryButtonText}</ExButton>}
                    {closeButtonText && <ExButton onClick={handleCloseRequest}
                                                  className={`${css.button} ${defaultButton !== 2 && css.generalButton}`}>{closeButtonText}</ExButton>}
                </HBoxPanel>}
            </VBoxPanel>}
            <DimOverlay z={`calc(${z} + var(--modal-dim-offset))`}
                        active={isDimmed}
                        onClick={handleCloseRequest}/>
        </>
    );
};