import React, { memo, useEffect } from 'react';
import { default as MD } from 'react-markdown';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';

import 'katex/dist/katex.min.css';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../hooks/useTheme';

export const CodeBlock = memo(function CodeBlock({ className, children, lang, hideLineNumbers = false, ...props }) {
    const { code } = useTheme();

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px'
    });
    
    return (
        <div ref={ref} className={`${className} flex row h-stretch`}>
            {inView && <SyntaxHighlighter showLineNumbers={!hideLineNumbers} className='flex-1' language={lang} style={code} {...props}>
                {children}
            </SyntaxHighlighter>}
        </div>
    );
});

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