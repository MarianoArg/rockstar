import './styles/slick.css';
import './styles/slick-theme.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import DetailPage from '@/components/DetailPage';
import Home from '@/components/Homepage';
import MainLayout from '@/components/MainLayout';
import SearchPage from '@/components/SearchPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/detail/:id">
              <DetailPage />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
