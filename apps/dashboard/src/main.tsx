import { NuqsAdapter } from 'nuqs/adapters/react';
import { StrictMode } from 'react';
import 'ui/tailwind.css';

import './styles/global.css';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { RootLayout } from './layouts';
import { TanStackQueryProvider } from './providers';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <NuqsAdapter>
         <TanStackQueryProvider>
            <RootLayout>
               <App />
            </RootLayout>
         </TanStackQueryProvider>
      </NuqsAdapter>
   </StrictMode>
);
