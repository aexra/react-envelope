import css from './PageBase.module.css';

export const PageBase = ({
    title,
    header,
    endtitle,
    footer,
    navigation,
    children
}) => {
    return (
        <div className={`${css.page} flex row top-center rel`}>
            <div className={`${css.body}`}>
                {children}
            </div>
            
            <div className={`${css.overlay} fixed h-full v-full flex col top-center`}>
                <header className={`${css.header} flex row h-full`}>
                    <div className={`${css.headerTitle}`}>
                        {title}
                    </div>
                    <div className={`${css.headerContent} h-full`}>
                        {header}
                    </div>
                    <div className={`${css.headerEndtitle}`}>
                        {endtitle}
                    </div>
                </header>
                <div className={`${css.boder} flex row h-full v-full rel`}>
                    <nav className={`${css.navigation}`}>
                        {navigation}
                    </nav>

                    <div className={`${css.boderBodyMask} h-full`}></div>
                    
                    <div className={`${css.contents}`}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};