import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import IconLabel from '../../ui/labels/IconLabel/IconLabel';
import css from './DSTULabeledForm.module.css';

export const DSTULabeledForm = ({ ref, className, label, iconSrc, iconContent, children }) => {
    return (
        <VBoxPanel ref={ref} className={`${css.dstuLabelForm} ${className} panel`}>
            <IconLabel className={css.label} text={label} src={iconSrc} iconContent={iconContent}/>
            {children}
        </VBoxPanel>
    );
};