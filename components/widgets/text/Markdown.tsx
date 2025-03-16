import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface IMarkdownProps {
    children: any
}

export const Markdown: FC<IMarkdownProps> = (props) => {
    return (
        <ReactMarkdown>{props.children}</ReactMarkdown>
    );
};