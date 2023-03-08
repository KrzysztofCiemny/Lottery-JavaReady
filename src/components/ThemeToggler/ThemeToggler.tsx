import React, { useEffect, useState } from 'react';

import { ThemeTogglerCheckbox } from '../ThemeToggler/ThemeToggler.styles';

export const ThemeToggler = ({ toggleTheme, theme }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const onToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    switch (theme) {
      case 'dark':
        setIsChecked(true);
        break;
      case 'light':
        setIsChecked(false);
        break;
    }
  }, [theme]);

  return <ThemeTogglerCheckbox type="checkbox" checked={isChecked} onClick={onToggle} />;
};
