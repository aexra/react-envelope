import { useState } from 'react';
import { NavPanel } from '../NavPanel/NavPanel';
import css from './PageBase.module.css';
import { Close, Menu } from '../../../dummies/Icons';

export const PageBase = ({
    title,
    header,
    endtitle,
    footer,
    navigation = <NavPanel/>,
    children
}) => {
    const [contents, setContents] = useState([]);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className={`${css.page} flex row top-center rel`}>
            <div className={`${css.body} flex col g20 bb`}>
                {children}
                {footer}
            </div>
            
            <div className={`${css.overlay} fixed h-full v-full flex col top-center`}>
                <header className={`${css.header} flex row h-full`}>
                    <div className={`${css.headerTitle} flex row center-right bb`}>
                        {title}
                    </div>
                    <div className={`${css.headerContent} flex row center-left bb flex-1`}>
                        <div className={`${css.head}`}>{header}</div>
                        <div className={`${css.headerEndtitle} flex row center-left bb h-last`}>
                            {endtitle}
                        </div>
                    </div>
                </header>
                <div className={`flex row h-full v-full rel`}>
                    <button className={`${css.mobileMenuButton} pointer`} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <Menu className='icon-m'/>
                    </button>

                    <nav className={`${css.navigation} flex col rel top-right bb ${mobileNavOpen ? css.navigationOpen : ''}`}>
                        {mobileNavOpen && <Close className={`icon-m abs pointer ${css.closeNav}`} onClick={() => setMobileNavOpen(!mobileNavOpen)}/>}
                        {navigation}
                    </nav>

                    <div className={`${css.boderBodyMask} h-full`}></div>
                    
                    <div className={`${css.contents} flex col top-left bb`} style={{paddingLeft: '20px'}}>
                        {contents && <div>
                            <h5 style={{color: 'var(--disabled-accent-color)'}}>Contents</h5>
                            <p style={{color: 'var(--disabled-accent-color)'}}>Здесь будет содержание</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};