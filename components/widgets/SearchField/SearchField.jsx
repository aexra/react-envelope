import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import css from './SearchField.module.css';
import filtervec from '../../../assets/vectors/Filters.svg';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import TransparentTextBox from '../../ui/input/text/TransparentTextBox/TransparentTextBox';
import { useState } from 'react';

function SearchField({ ref, className, style, onSubmit, onFilterOpen }) {
    const [isFocus, setFocus] = useState(false);

    const handleFocus = (e) => {
        setFocus(e);
    };

    const handleSubmit = (query) => {
        onSubmit(query);
    };

    return (
        <HBoxPanel ref={ref}
                   className={`${className} ${isFocus ? css.focused : ''} ${css.panel} panel`}
                   style={style}
                   gap='10px'
                   valign='center'>
            <TransparentTextBox className={css.tb}
                                onSubmit={handleSubmit}
                                onFocusChanged={handleFocus}/>
            <RoundImageButton image={filtervec} 
                              alt='Filter'
                              onClick={onFilterOpen}/>
        </HBoxPanel>
    );
}

export default SearchField;