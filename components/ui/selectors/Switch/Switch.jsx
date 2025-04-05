import React, { useState } from 'react';
import css from './Switch.module.css';

export const Switch = ({
    className,
    direction,
    children,
    onSelect,
    value
}) => {
    return (
        <div className={`flex ${direction} g5 ${className} ${css.switch}`}>
            {React.Children.toArray(children).map((c, i) => (
                <div key={i} onClick={() => onSelect(i)} className={`${css.item} pointer ${i == value && css.selected}`}>
                    {c}
                </div>
            ))}
        </div>
    );
};