import { useEffect } from "react";

export const useAutoHeadings = () => {
    useEffect(() => {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        headings.forEach(heading => {
            if (!heading.id && heading.textContent) {
            heading.id = heading.textContent
                .toLowerCase()
                .replace(/[^\w\u0400-\u04FF]+/g, '-')
                .replace(/^-+|-+$/g, '');
            }
        });
    }, []);
};