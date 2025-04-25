import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import AppTheme from './theme/AppTheme';

export default function App() {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </BrowserRouter>
  );
}
