import { useTheme } from "../../../hooks/useTheme";
import { Moon, Sun } from "../../dummies/Icons";
import ToggleButton from "../../ui/buttons/ToggleButton/ToggleButton";
import { SelfUserConfItem } from "./SelfUserConfItem";
import css from './base.module.css';

export const ThemeAuthEndtitle = ({
    className
}) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`flex row h-full g20 ${className} ${css.flex10}`} style={{marginRight: '10px'}}>
            <ToggleButton onToggle={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                          icon={<Moon className='pointer' style={{width: '25px'}}/>}
                          toggledIcon={<Sun className='pointer' style={{width: '25px'}}/>}/>
            <SelfUserConfItem className={'h-last'}/>
        </div>
    );
};