import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography> Page not found. </Typography>
      <Button onClick={() => navigate('/')}> Return to main page </Button>
    </>
  );
};
