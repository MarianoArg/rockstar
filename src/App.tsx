import './styles/slick.css';
import './styles/slick-theme.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch, useLocation } from 'react-router-dom';

import DetailPage from '@/components/DetailPage';
import Home from '@/components/Homepage';
import MainLayout from '@/components/MainLayout';
import SearchPage from '@/components/SearchPage';

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  const background = location?.state?.background;
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Switch location={background || location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        </Switch>
        {background && (
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        )}
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
