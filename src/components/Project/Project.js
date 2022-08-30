import PageHeader from './../PageHeader/PageHeader';
import classes from './Project.module.css'
import teaandcozy from './teaandcozy.jpg'
import restaurant from './restaurant.png'
import colmar from './colmar.png'
import jamming from './Jamming.png'
import fitfriends from './fitfriends.png'
import blender from './Blender.jpg'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Project() {
  return (
    <div className={classes.Project} id="Project">
        <PageHeader title={"My Project"} />
    <Card sx={{ maxWidth: 500 , boxShadow: 1,bgcolor:'rgb(249, 215, 184)',display: 'flex', flexDirection: 'column', margin: '0px auto' }}>
      <CardMedia
        component="img"
        height="200"
        image={colmar}
        alt="Colmar Academy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Colmar Academy
        </Typography>
        <Typography variant="body2" color="text.secondary">
        • Codecademy build website using HTML and CSS for education Colmar Academy
        </Typography>
      </CardContent>
      <CardActions>
      <Button href ="https://github.com/tvv1nkle/ColmarAcademy" target="_blank" rel="noreferrer" size="small">Github</Button>
    <Button href="https://tvv1nkle.github.io/ColmarAcademy/" target="_blank" rel="noreferrer" size="small">PROJECT</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="200"
        image={restaurant}
        alt="restaurant"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Restaurant
        </Typography>
        <Typography variant="body2" color="text.secondary">
        • Build restaurant reservation website using HTML 
        </Typography>
      </CardContent>
      <CardActions>
      <Button href ="https://github.com/tvv1nkle/restaurant" target="_blank" rel="noreferrer" size="small">Github</Button>
    <Button href="https://tvv1nkle.github.io/restaurant/" target="_blank" rel="noreferrer" size="small">PROJECT</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="200"
        image={teaandcozy}
        alt="Tea and Cozy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Tea and Cozy
        </Typography>
        <Typography variant="body2" color="text.secondary">
        • Create bakery website using HTML and CSS Tea and Cozy Codeacademy Project 
        </Typography>
      </CardContent>
      <CardActions>
      <Button href ="https://github.com/tvv1nkle/TeaAndCozyCodeCa" target="_blank" rel="noreferrer" size="small">Github</Button>
    <Button href="https://tvv1nkle.github.io/TeaAndCozyCodeCa/" target="_blank" rel="noreferrer" size="small">PROJECT</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="200"
        image={jamming}
        alt="Jamming"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Jamming
        </Typography>
        <Typography variant="body2" color="text.secondary">
        • Create React app for creating new playlists with Spotify 
        </Typography>
      </CardContent>
      <CardActions>
      <Button href ="https://github.com/tvv1nkle/Jammming" target="_blank" rel="noreferrer" size="small">Github</Button>
    <Button href="" target="_blank" rel="noreferrer" size="small">PROJECT</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="200"
        image={fitfriends}
        alt="Fitfriends"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Fitfriends
        </Typography>
        <Typography variant="body2" color="text.secondary">
        • Create Excercise tracker using MERN Stack 
        </Typography>
      </CardContent>
      <CardActions>
      <Button href ="https://github.com/tvv1nkle/fitfriends-frontend" target="_blank" rel="noreferrer" size="small">Github</Button>
    <Button href="https://fitfriend-frontend-deploy.vercel.app/" target="_blank" rel="noreferrer" size="small">PROJECT</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="200"
        image={blender}
        alt="blender"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Blender
        </Typography>
        <Typography variant="body2" color="text.secondary">
        • Using blender create 3d model from The sims
        </Typography>
      </CardContent>
      <CardActions>
      <Button href ="https://github.com/tvv1nkle/blender-render-model" target="_blank" rel="noreferrer" size="small">Github</Button>
    <Button href="https://github.com/tvv1nkle/blender-render-model" target="_blank" rel="noreferrer" size="small">PROJECT</Button>
      </CardActions>
    </Card>
    </div>
    
  );
}

