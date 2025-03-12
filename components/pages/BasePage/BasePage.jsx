import Header from '../../widgets/Header/Header';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './BasePage.module.css';
import NavSidebar from '../../widgets/NavSidebar/NavSidebar';

function BasePage({ ref, className, style, children, hasHeader = true, bodyGap = '40px', bodyClassName, hasNavSidebar = true, headerContent, footerContent }) {
    return (
        <VBoxPanel  className={`${className} ${css.page} ${!footerContent && css.footerless} ${hasNavSidebar && css.pageSidebarMargin}`}
                    style={{
                        ...style
                    }}
                    ref={ref}
                    gap='40px'>
            {hasNavSidebar && <NavSidebar/>}
            {hasHeader && <Header>{headerContent}</Header>}
            <VBoxPanel className={`${css.body} ${bodyClassName}`}
                       gap={bodyGap}>
                {children}
            </VBoxPanel>
            {footerContent}
        </VBoxPanel>
    );
}

export default BasePage;