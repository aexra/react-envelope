import React, { useEffect } from 'react';
import { default as MD } from 'react-markdown';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../hooks/useTheme';

export const CodeBlock = ({ className, children, lang, ...props }) => {
    const { code } = useTheme();

    const { ref, inView } = useInView({
        triggerOnce: false, // Загружать только один раз
        rootMargin: '200px', // Начать загрузку заранее
    });
    
    return (
        <div ref={ref}>
            {inView && <SyntaxHighlighter codeTagProps={{}} language={lang} style={code}>
                {children}
            </SyntaxHighlighter>}
        </div>
    );
};

export function Markdown({ className, children: content }) {
    return (
        <div className={`${className}`}>
            <MD remarkPlugins={[ remarkGfm, remarkMath ]}
                rehypePlugins={[ rehypeRaw, rehypeKatex]}>
                    {content}
            </MD>
        </div>
    );
}