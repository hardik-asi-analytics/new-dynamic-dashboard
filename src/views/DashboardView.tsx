import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { RootContextProviders } from './RootContextProviders';
import Loading from 'src/components/Loading';
import { store } from './store';
// import { BrowserRouter as Router } from 'react-router-dom';

interface DashboardViewProps {
  idOrSlug: string | any
}

const LazyDashboardPage = lazy(
  () =>
    import(
      /* webpackChunkName: "DashboardPage" */ 'src/dashboard/containers/DashboardPage'
    ),
);

const DashboardView: React.FC<DashboardViewProps> = ({ idOrSlug }: DashboardViewProps) => (
    <Provider store={store}>
      <RootContextProviders>
        <Suspense fallback={<Loading />}>
          <LazyDashboardPage idOrSlug={idOrSlug} />
        </Suspense>
      </RootContextProviders>
    </Provider>
);

export default DashboardView;
