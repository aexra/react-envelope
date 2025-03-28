import { useState } from 'react';
import { NavPanel } from '../NavPanel/NavPanel';
import css from './PageBase.module.css';
import { Close, Menu, MenuAlt } from '../../../dummies/Icons';
import { IconTitle } from '../IconTitle';
import { ThemeAuthEndtitle } from '../ThemeAuthEndtitle';
import { IconHeader } from '../IconHeader';
import { Footer } from '../Footer/Footer';
import { DimOverlay } from '../../../ui/misc/DimOverlay/DimOverlay';

export const PageBase = ({
    title = <IconTitle/>,
    header = <IconHeader/>,
    endtitle = <ThemeAuthEndtitle/>,
    footer = <Footer/>,
    navigation = <NavPanel/>,
    children,
    less = false,
    gap = '10px'
}) => {
    const [contents, setContents] = useState([]);
    const [navOpen, setMobileNavOpen] = useState(false);
    const [contentsOpen, setMobileContentsOpen] = useState(false);

    return (
        <div className={`${css.page} flex col top-center`}>
            <div className={`${css.overlay} flex col fixed`}>
                <div className={`${css.header} flex row center-left`}>
                    <div className={`${css.title}`}>
                        { title }
                    </div>
                    <div className={`${css.headerContent} flex row center-left g20 flex-1`}>
                        { header }
                        <div className={`${css.endtitle} flex row h-last`}>
                            { endtitle }
                        </div>
                    </div>
                </div>
                <div className={`${css.content} flex-1 flex row`}>
                    <nav className={`${css.nav} ${navOpen && css.open} flex col top-right bb`}>
                        { navigation }
                    </nav>
                    <div className={`${css.body} flex`}>

                    </div>
                    <div className={`${css.contents} ${contentsOpen && css.open} flex col top-left bb`}>
                        <span>Contents</span>
                        <p>Здесь будет содержание страницы</p>
                    </div>
                </div>
            </div>
            <div className={`${css.contentWrapper} flex row flex-1`}>
                <div className={`${css.fixer} ${css.l}`}></div>
                <div className={`${css.content} flex col`} style={{gap: gap}}>
                    { children }
                    { footer }
                </div>
                <div className={`${css.fixer} ${css.r}`}></div>
            </div>
            <div className={`${css.contentsMenuButton} ${css.menuButton} fixed pointer`} onClick={() => setMobileContentsOpen(!contentsOpen)}>
                {contentsOpen ? <Close style={{width: '20px', height: '20px'}}/> : <MenuAlt/>}
            </div>
            <div className={`${css.navMenuButton} ${css.menuButton} fixed pointer`} onClick={() => setMobileNavOpen(!navOpen)}>
                {navOpen ? <Close style={{width: '20px', height: '20px'}}/> : <Menu/>}
            </div>
            <DimOverlay active={navOpen} onClick={() => setMobileNavOpen(false)}/>
            <DimOverlay active={contentsOpen}  onClick={() => setMobileContentsOpen(false)}/>
        </div>
    );
};