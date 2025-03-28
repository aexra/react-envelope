import { useEffect, useState } from 'react';
import css from './AutoTableOfContents.module.css';

export const AutoTableOfContents = () => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const headingElements = Array.from(
        document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        );

        const headingData = headingElements.map((heading) => ({
        id: heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-'),
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1)),
        }));

        setHeadings(headingData);
    }, []);

    return (
        <nav className="toc">
        <h2>Содержание</h2>
        <ul>
            {headings.map((heading) => (
            <li 
                key={heading.id} 
                style={{ marginLeft: `${(heading.level - 1) * 15}px` }}
            >
                <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
            ))}
        </ul>
        </nav>
    );
};