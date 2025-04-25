import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MuiApp from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiApp />
  </StrictMode>,
)
