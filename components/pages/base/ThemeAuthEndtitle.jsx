import { useTheme } from "../../../hooks/useTheme";
import { Moon, Sun } from "../../dummies/Icons";
import ToggleButton from "../../ui/buttons/ToggleButton/ToggleButton";

export const ThemeAuthEndtitle = ({
    className
}) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`flex row g10 ${className}`}>
            <ToggleButton onToggle={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                          icon={<Moon className='pointer' style={{width: '25px'}}/>}
                          toggledIcon={<Sun className='pointer' style={{width: '25px'}}/>}/>
        </div>
    );
};