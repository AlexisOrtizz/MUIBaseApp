import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown';
import React from 'react';

function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <> 
      <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      { children }
    </>
  );
};

export default AuthLayout;