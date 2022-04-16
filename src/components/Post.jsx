import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>{
    return{
      meida:{
          height:280,
          [theme.breakpoints.down('sm')]:{
              height: 200,
          }
      },
      card:{
          marginBottom:theme.spacing(5)
      }
    }
});

const Post = () => {
    const classes = useStyles();
    return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.meida} 
            image='https://images.unsplash.com/photo-1537033206914-9d3551ff8103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            title="My post"
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>My First Post</Typography>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor minus autem! Quaerat optio sit eligendi, fuga ab corrupti totam iste nulla deleniti incidunt tempore doloribus officia et vel! Magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor minus autem! Quaerat optio sit eligendi, fuga ab corrupti totam iste nulla deleniti incidunt tempore doloribus officia et vel! Magni.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActionArea>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Learn More</Button>
        </CardActionArea>
    </Card>
  )
}

export default Post