import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </div>
  );
};

export default Router;
