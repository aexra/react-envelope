import Header from '../../widgets/Header/Header';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './BasePage.module.css';

function BasePage({
    ref, 
    className, 
    style, 
    children, 
    bodyGap = '40px', 
    bodyClassName, 
    navSidebar, 
    headered = false, 
    headerContent, 
    footerContent, 
    bodyMargin = '0px',
    bodyPadding = '20px 20px',
    bodyStyle
}) {
    return (
        <VBoxPanel  className={`${className} ${css.page} ${!footerContent && css.footerless} ${navSidebar && css.pageSidebarMargin} ${(headerContent || headered) && css.headered}`}
                    style={{
                        ...style
                    }}
                    ref={ref}
                    gap={bodyMargin}>
            {navSidebar}
            {(headerContent || headered) && <div><Header style={{
                width: navSidebar ? 'calc(100% - var(--sidebar-width))' : '100%'
            }}>{headerContent}</Header></div>}
            <VBoxPanel className={`${css.body} ${bodyClassName}`}
                       gap={bodyGap}
                       style={{
                            padding: bodyPadding,
                            ...bodyStyle
                       }}>
                {children}
            </VBoxPanel>
            {footerContent}
        </VBoxPanel>
    );
}

export default BasePage;