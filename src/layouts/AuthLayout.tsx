import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '@/theme/AppTheme';
import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown';
import React from 'react';

export default function AuthLayout({ disableCustomTheme, children }: { 
  disableCustomTheme?: boolean,
  children: React.ReactNode
}) {
  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      { children }
    </AppTheme>
  );
};