import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h3>Not found page</h3>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
