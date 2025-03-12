import Header from '../../widgets/Header/Header';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './BasePage.module.css';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';

function BasePage({ ref, className, style, children, hasHeader = true, bodyGap = '40px', bodyClassName, navSidebar, headerContent, footerContent }) {
    return (
        <VBoxPanel  className={`${className} ${css.page} ${!footerContent && css.footerless} ${navSidebar && css.pageSidebarMargin}`}
                    style={{
                        ...style
                    }}
                    ref={ref}
                    gap='40px'>
            {navSidebar}
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