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
        <div className={`${css.page} flex col top-center rel`}>
            <div className={`${css.body} flex col g10 flex-1`}>
                {children}
                {footer}
            </div>
            <div className={`${css.overlay} fixed`}>
                <div className={`${css.header} h-full`}>
                    <div className={`${css.headercontainer} h-full rel`}>
                        <div className={`${css.headertitle} abs v-full flex row center`}>
                            {title}
                        </div>
                        <div className={`${css.headerbody} v-full flex row center-left`}>
                            {header}
                        </div>
                        <div className={`${css.endheader} abs v-full flex row center`}>
                            {endheader}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};