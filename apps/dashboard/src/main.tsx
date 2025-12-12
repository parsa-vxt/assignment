import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'ui/tailwind.css';

import './styles/global.css';
import App from './App.tsx';
import { RootLayout } from './layouts';
import { TanStackQueryProvider } from './providers';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <TanStackQueryProvider>
         <RootLayout>
            <App />
         </RootLayout>
      </TanStackQueryProvider>
   </StrictMode>
);
