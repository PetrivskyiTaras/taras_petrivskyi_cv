import { IconButton, Tooltip } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { type FC } from 'react';

import styles from './ToggleThemeButton.module.css';

type Props = {
  className?: string;
};

const ToggleThemeButton: FC<Props> = ({ className }) => {
  const { setMode } = useColorScheme();

  // Read the applied scheme from <html> (set before paint), so it is correct even before hydration.
  const handleToggle = () => {
    setMode(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  };

  return (
    <Tooltip title="Switch light / dark theme" placement="right" arrow>
      <IconButton
        onClick={handleToggle}
        className={className ? `${ styles.root } ${ className }` : styles.root}
        aria-label="Switch light / dark theme"
      >
        { /* Both icons render on the server; CSS shows the right one for the current scheme. */ }
        <DarkModeIcon className={styles.moon} />
        <LightModeIcon className={styles.sun} />
      </IconButton>
    </Tooltip>
  );
};

export default ToggleThemeButton;
