import React, { useEffect, useState } from 'react';
import css from './Pivot.module.css';

export const Pivot = ({
    className,
    keysProps,
    contentProps,
    children
}) => {
    const [selected, select] = useState(0);

    const keysElement = React.Children.toArray(children).find(
        child => child.type === Pivot.Keys
    );
    const itemsElement = React.Children.toArray(children).find(
        child => child.type === Pivot.Items
    );

    const keys = keysElement?.props.children || [];
    const items = itemsElement?.props.children || [];

    return (
        <div className={`${css.pivot} ${className} flex col g5`}>
            <div className={`${css.keys} flex row g5 x-scroll smaller-scroll-thumb`} {...keysProps}>
                {React.Children.map(keys, (key, index) => (
                    <button 
                        key={index}
                        className={`${css.key} pointer ${index == selected && css.selected}`}
                        onClick={() => select(index)}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className={`${css.content}`} {...contentProps}>
                {items[selected]}
            </div>
        </div>
    );
};

Pivot.Keys = ({ children }) => <>{children}</>;
Pivot.Items = ({ children }) => <>{children}</>;