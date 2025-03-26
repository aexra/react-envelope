import css from './PageBase.module.css';

export const PageBase = ({
    title,
    header,
    endheader,
    footer,
    navigation,
    children
}) => {
    return (
        <div className={`${css.page} flex row top-center rel`}>
            {/* <header>

            </header> */}
            <nav className={`${css.navigation} fixed`}>
                {navigation}
            </nav>
            <div className={`${css.body}`}>
                {children}
            </div>
            <div className={`${css.contents} fixed`}>

            </div>
        </div>
    );
};