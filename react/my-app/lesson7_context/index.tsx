import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { MediaQueryProvider } from './MediaQueryProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <MediaQueryProvider>
        <App />
      </MediaQueryProvider>
    </ThemeProvider>
  </BrowserRouter>
);
