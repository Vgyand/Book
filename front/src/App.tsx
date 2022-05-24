import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useId } from 'react';
import { dataRoutes } from './dataRoutes';

const App = () => {
  const id = useId();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {dataRoutes.map((route) => <Route key={id} path={route.path} element={route.component} />)}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
