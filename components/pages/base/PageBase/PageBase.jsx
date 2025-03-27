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
    children,
    less = false
}) => {
    const [contents, setContents] = useState([]);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className={`${css.page} flex col top-center`}>
            <div className={`${css.overlay} flex col fixed`}>
                <div className={`${css.header}`}>

                </div>
                <div className={`${css.content} flex-1 flex row`}>
                    <nav className={`${css.nav} flex col top-right`}>
                        { navigation }
                    </nav>
                    <div className={`${css.body} flex`}>

                    </div>
                    <div className={`${css.contents} flex col top-left`}>

                    </div>
                </div>
            </div>
            <div className={`${css.contentWrapper} flex row flex-1`}>
                <div className={`${css.fixer}`}></div>
                <div className={`${css.content} flex col`}>
                    { children }
                </div>
                <div className={`${css.fixer}`}></div>
            </div>
        </div>
    );
};