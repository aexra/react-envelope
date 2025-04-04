import { useContext, useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './DSTUNavSidebar.module.css';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import { NavSidebarButton } from '../../ui/buttons/NavSidebarButton/NavSidebarButton';
import dstu from '../../../assets/images/dstu-w.png';
import { DimOverlay } from '../../ui/misc/DimOverlay/DimOverlay';
import { useAuth } from '../../../hooks/useAuth';
import { Code, Pizza } from '../../dummies/Icons';
import { useNavigation } from '../../../hooks/useNavigation';

function DSTUNavSidebar({ ref, className, children }) {    
    const [isDimming, setDimming] = useState(false);
    const { navlinks } = useNavigation();
    
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
                    {navlinks(NavSidebarButton)}
                    {children}
                </VBoxPanel>
            </VBoxPanel>
            <DimOverlay active={isDimming}/>
        </>
    )
}

export default DSTUNavSidebar;