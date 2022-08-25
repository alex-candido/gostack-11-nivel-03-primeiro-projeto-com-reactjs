import { useParams } from 'react-router-dom';

const Repository: React.FC = () => {
  const { repository } = useParams();
  return (
    <div>
      <h1>Repository: {repository}</h1>
    </div>
  );
};

export default Repository;
