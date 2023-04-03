import { EverythingNews } from '../features/everything-news/EverythingNews';
import { TopHeadlines } from '../features/top-headlines-news/TopHeadlines';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Box>
        <Button>
          <Link to={'/redux-news'}>Top Headlines</Link>
        </Button>
        <Button>
          <Link to={'/redux-news/everything-news'}>Everything News</Link>
        </Button>
      </Box>
      <Routes>
        <Route path='/redux-news' element={<TopHeadlines />} />
        <Route
          path='/redux-news/everything-news'
          element={<EverythingNews />}
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Box>
  );
}

export default App;
