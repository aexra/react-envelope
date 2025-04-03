import { useEffect, useState } from 'react';
import css from './AutoTableOfContents.module.css';
import { useAutoHeadings } from '../../../../hooks/useAutoHeadings';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import { ExpandMore } from '../../../dummies/Icons';

export const AutoTableOfContents = ({
    scrollToTopButtonVisibilityConditionPercent = 20
}) => {
    const { refresh } = useAutoHeadings();
    const [headings, setHeadings] = useState([]);
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;

        if (scrollPercentage > scrollToTopButtonVisibilityConditionPercent) {
            setShowScrollToTopButton(true);
        } else {
            setShowScrollToTopButton(false);
        }
    };

    useEffect(() => {
        refresh();

        const headingElements = Array.from(
            document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        );

        const headingData = headingElements.map((heading) => ({
            id: heading.id,
            text: heading.textContent,
            level: parseInt(heading.tagName.substring(1)),
        }));

        setHeadings(headingData);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav className={`${css.toc} rel v-full`}>
            <ul>
                {headings.map((heading) => (
                    <li key={heading.id} 
                        style={{ marginLeft: `${(heading.level - 1) * 15}px` }}>
                        <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                ))}
            </ul>
            <ExpandMore className={`${css.totop} ${showScrollToTopButton && css.visible} pointer`}
                        onClick={scrollToTop}/>
        </nav>
    );
};