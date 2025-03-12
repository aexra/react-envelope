import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import css from './DSTUFooter.module.css';
import footer_image from '../../../assets/images/dstu_footer.png';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import rArrow from '../../../assets/vectors/rArrow-w.svg';

function DSTUFooter({ ref, className, style }) {
    return (
        <HBoxPanel ref={ref}
                   className={`${css.footer} ${className}`}
                   style={style}
                   gap='20px'
                   valign='center'>
            <img className={css.image} src={footer_image} alt="DSTU"/>
            <RoundImageButton className={`${css.upper}`}
                              alt='Up'
                              image={rArrow}
                              />
        </HBoxPanel>
    );
}

export default DSTUFooter;