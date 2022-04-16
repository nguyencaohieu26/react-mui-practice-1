import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import Post from './Post';

const useStyles = makeStyles((theme)=>{
    return{
      container:{
        paddingTop:theme.spacing(10),
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
        gap:15,
      }
    }
});

const Feed = () => {
    const classes = useStyles();
    return (
    <Container className={classes.container}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Container>
  )
}

export default Feed