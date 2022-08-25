import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="repository/:repositoryaccount/:repositoryname"
        element={<Repository />}
      />
    </Routes>
  );
};

export default Router;
