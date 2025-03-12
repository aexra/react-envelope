import Footer from '../../widgets/Footer/Footer';
import Header from '../../widgets/Header/Header';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './BasePage.module.css';
import NavSidebar from '../../widgets/NavSidebar/NavSidebar';

function BasePage({ ref, className, style, children, hasHeader = true, hasFooter = true, bodyGap = '40px', hasNavSidebar = true }) {
    return (
        <VBoxPanel  className={`${className} ${css.page} ${!hasFooter && css.footerless} ${hasNavSidebar && css.pageSidebarMargin}`}
                    style={{
                        ...style
                    }}
                    ref={ref}
                    gap='40px'>
            {hasNavSidebar && <NavSidebar/>}
            {hasHeader && <Header/>}
            <VBoxPanel className={`${css.body}`}
                       gap={bodyGap}>
                {children}
            </VBoxPanel>
            {hasFooter && <Footer/>}
        </VBoxPanel>
    );
}

export default BasePage;