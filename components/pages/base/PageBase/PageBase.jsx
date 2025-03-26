import { NavPanel } from '../NavPanel/NavPanel';
import css from './PageBase.module.css';

export const PageBase = ({
    title,
    header,
    endtitle,
    footer,
    navigation = <NavPanel/>,
    children
}) => {
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
                    <div className={`${css.headerContent} h-full flex row center-left bb`}>
                        {header}
                    </div>
                    <div className={`${css.headerEndtitle} flex row center-left bb`}>
                        {endtitle}
                    </div>
                </header>
                <div className={`${css.boder} flex row h-full v-full rel`}>
                    <nav className={`${css.navigation} flex col top-right pad20 bb`}>
                        {navigation}
                    </nav>

                    <div className={`${css.boderBodyMask} h-full`}></div>
                    
                    <div className={`${css.contents} flex col top-right pad20 bb`}>

                    </div>
                </div>
            </div>
        </div>
    );
};