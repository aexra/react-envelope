import { useContext, useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './DSTUNavSidebar.module.css';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import { NavSidebarButton } from '../../ui/buttons/NavSidebarButton/NavSidebarButton';
import dstu from '../../../assets/images/dstu-w.png';
import home from '../../../assets/images/home-w.png';
import person from '../../../assets/images/user.png';
import bug from '../../../assets/images/coding.png';
import { DimOverlay } from '../../ui/misc/DimOverlay/DimOverlay';

function DSTUNavSidebar({ ref, className }) {    
    const [isDimming, setDimming] = useState(false);
    
    const handleHover = (e) => {
        setDimming(e);
    };

    return (
        <>
            <VBoxPanel ref={ref}
                       className={`y-scroll ${className} ${css.sidebar}`}
                       hoverChanged={handleHover}
                       valign='start'>
                <HBoxPanel valign='center'
                        halign='center'
                        className={css.logoContainer}>
                    <a href="">
                        <img className='icon-g round' src={dstu} alt="Logo"/>
                    </a>
                </HBoxPanel>
                <HDivider color='var(--dstu-blue)' margin='0 0 5px 0'/>
                <VBoxPanel>
                    <NavSidebarButton text='Домой' to='/' icon={home}/>
                    <NavSidebarButton text='Вход' to='/login' icon={person}/>
                    <NavSidebarButton text='Экспериментальная' to='/_lab' icon={bug} className={css.debug} iconClassName={css.debugIcon}/>
                </VBoxPanel>
            </VBoxPanel>
            <DimOverlay active={isDimming}/>
        </>
    )
}

export default DSTUNavSidebar;