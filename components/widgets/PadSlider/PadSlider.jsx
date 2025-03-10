import { Children, useRef, useState } from 'react';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './PadSlider.module.css';
import rArrow from '../../../assets/vectors/rArrow.svg';

function PadSlider({ ref, className, style, children }) {
    const [index, setIndex] = useState(0);
    const container = useRef(null);
    const childrenArray = Children.toArray(children);

    const handlePrev = (e) => {
        setIndex(index - 1 < 0 ? childrenArray.length - 1 : index - 1);
        resetScroll();
    };

    const handleNext = (e) => {
        setIndex(index + 1 > childrenArray.length - 1 ? 0 : index + 1);
        resetScroll();
    };

    const resetScroll = () => {
        if (container.current) {
            container.current.scrollTop = 0;
        }
    };

    return (
        <VBoxPanel className={`panel ${css.panel} ${className}`} ref={ref} style={style} valign='stretch' halign='stretch' gap='10px'>
            <div ref={container} className={`y-scroll ${css.itemContainer}`}>
                {childrenArray.length > 0 ? childrenArray[index] : ''}
            </div>
            <HBoxPanel className={css.buttons}>
                <button className={`${css.arrow} ${css.left}`} onClick={handlePrev}>
                    <img src={rArrow} alt="Prev"/>
                </button>
                <button className={`${css.arrow} ${css.right}`} onClick={handleNext}>
                    <img src={rArrow} alt="Next"/>
                </button>
            </HBoxPanel>
        </VBoxPanel>
    );
}

export default PadSlider;