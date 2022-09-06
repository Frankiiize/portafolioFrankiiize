import './App.scss';
import { Suspense } from 'react';
import { Router } from './routers/router';
import { DefaultLayout } from './layouts/DefaultLayout';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <DefaultLayout>
          <Router />
        </DefaultLayout>
      </Suspense>
    </div>
  );
}

export default App;
