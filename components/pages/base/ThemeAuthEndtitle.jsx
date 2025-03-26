import { useTheme } from "../../../hooks/useTheme";
import { Moon, Sun } from "../../dummies/Icons";
import ToggleButton from "../../ui/buttons/ToggleButton/ToggleButton";
import { SelfUserConfItem } from "./SelfUserConfItem";

export const ThemeAuthEndtitle = ({
    className
}) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`flex row g20 h-full ${className}`} style={{marginRight: '10px'}}>
            <ToggleButton onToggle={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                          icon={<Moon className='pointer' style={{width: '25px'}}/>}
                          toggledIcon={<Sun className='pointer' style={{width: '25px'}}/>}/>
            <SelfUserConfItem className={'h-last'}/>
        </div>
    );
};