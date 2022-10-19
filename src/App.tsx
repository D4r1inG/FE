import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from '@/routes';

const queryClient = new QueryClient();

const App = () => {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<>...</>}>
      <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
    </Suspense>
  );
};

export default App;
