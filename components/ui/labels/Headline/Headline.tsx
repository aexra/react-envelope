import React, { FC } from "react"

interface IHeadlineProps {
    children: React.ReactNode;
}

export const Headline: FC<IHeadlineProps> = ({ children }) => {
    return <h1 className="article">{children}</h1>
};