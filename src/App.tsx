import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NestedRoutes from './routes';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NestedRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
