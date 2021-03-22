import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {Button} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight:150,
    marginLeft:30
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingTop:50
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  button_button:{
    background:'#039be5'
  }
}));

export default function MediaControlCard({button,image}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <div className={classes.controls}>
          <Button className={classes.button_button} href="/Selected">{button}</Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Card>
  );
}
