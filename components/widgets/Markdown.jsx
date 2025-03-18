import React, { useEffect } from 'react';
import { default as MD } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github-dark.css';

export function Markdown({ className, children: markdown }) {
  return (
    <div className={`${className}`}>
      <MD remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}>
        {markdown}
      </MD>
    </div>
  );
}