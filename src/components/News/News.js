import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './News.css';

const News = (props) => {
    const {title,description,urlToImage} = props.article;
    return (
        <div className='news_container'>
            <Card sx={{ maxWidth: 345 + 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={urlToImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">share</Button>
                    <Button variant="contained">learn more</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default News;