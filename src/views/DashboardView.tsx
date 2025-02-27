import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RootContextProviders } from './RootContextProviders';
import Loading from 'src/components/Loading';
import DashboardPage from 'src/dashboard/containers/DashboardPage';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';

interface DashboardViewProps {
  idOrSlug: string
}

const DashboardView = ({ idOrSlug }: DashboardViewProps) => (
    <Provider store={store}>
      <Router>
        <RootContextProviders>
          <Suspense fallback={<Loading />}>
            <DashboardPage idOrSlug={idOrSlug} />
          </Suspense>
        </RootContextProviders>
      </Router>
    </Provider>
);

export default DashboardView;
