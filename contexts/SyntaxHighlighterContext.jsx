import { createContext, useContext, useEffect, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ThemeContext } from './ThemeContext';

import light from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-one-light';
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark';

import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);

SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('tsx', tsx);

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('py', python);

export const SyntaxHighlighterContext = createContext();

export const SyntaxHighlighterProvider = ({ children, themes = false }) => {
    const [ _, isLight ] = useContext(ThemeContext);
    const [ code, setCodeTheme ] = useState(dark);

    useEffect(() => {
        if (themes) {
            if (isLight) setCodeTheme(light);
            else setCodeTheme(dark);
        }
    }, [isLight]);
    
    return (
        <SyntaxHighlighterContext.Provider value={[ code ]}>
            {children}
        </SyntaxHighlighterContext.Provider>
    );
};