import { Article } from '../../types/types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const NewsList = ({ articles }: { articles: Article[] }) => {
  return (
    <Grid container justifyContent={'center'}>
      {articles.map((article, i) => (
        <Card elevation={3} sx={{ maxWidth: 345, margin: 3 }} key={i}>
          <CardContent>
            <Box sx={{ maxHeight: 250, minHeight: 250 }}>
              <Typography
                variant={'h6'}
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                gutterBottom>
                {article.title}
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 7,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                gutterBottom>
                {article.description}
              </Typography>
            </Box>

            <CardMedia
              component={'img'}
              height={'180'}
              image={article.urlToImage as string}
              alt={article.title as string}
            />
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              size={'small'}
              variant='contained'
              href={article.url as string}
              target='_blank'>
              See full article
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};
