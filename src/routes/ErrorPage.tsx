import { useRouteError, useNavigate } from 'react-router-dom';
import { ErrorType } from '../types/ErrorPage';



const ErrorPage:React.FC = () => {
  const error = useRouteError() as ErrorType;
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ups, I did it again</h1>
      <p>{error.statusText || error.message}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
