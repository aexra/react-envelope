import React, { useState } from 'react';
import css from './Switch.module.css';

export const Switch = ({
    className,
    direction,
    children,
    onSelect
}) => {
    const [selected, select] = useState(0);

    const handleSelect = (i) => {
        if (onSelect) onSelect(i);
        select(i);
    };

    return (
        <div className={`flex ${direction} g5 ${className} ${css.switch}`}>
            {React.Children.toArray(children).map((c, i) => (
                <div key={i} onClick={() => handleSelect(i)} className={`${css.item} pointer ${i == selected && css.selected}`}>
                    {c}
                </div>
            ))}
        </div>
    );
};