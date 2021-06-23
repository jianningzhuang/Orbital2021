import React, { useState, useEffect} from 'react'
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import listingService from '../services/listings'
import Grid from '@material-ui/core/Grid';
import FavoriteModule from '../components/FavoriteModule'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Module = ({ module, user}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const linktoNUSMods = `https://www.nusmods.com/modules/${module.moduleCode}`;

//   const [listings, setListings] = useState([])

// useEffect(() => {
//   listingService
//     .getAll()
//     .then(initialListings => {
//     setListings(initialListings)
//   })
// }, [])

// var listingExists = false;
// for (listing in listings) {
//   if ({module.moduleCode} === {listing.module}) {
//     listingExists = true;
//   }
// }

  return (
      <Grid item xs={12}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={10}>
                <Typography className={classes.title} color="textSecondary" >
                  <br></br>
                  {module.moduleCode}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <FavoriteModule module={module} user={user}/>
              </Grid>
            </Grid>
            <Typography variant="h6" component="h2">
              {module.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br></br>
              <br></br>
              {module.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" href={linktoNUSMods} target="_blank" color="primary">
    Learn More
        </Button>
        </CardActions>
      </Card>
    </Grid>
);
}

export default Module