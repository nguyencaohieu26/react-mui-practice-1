import React from 'react'
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab';

const PERSON_AVATAR_LIST = [
  {
    id:1,
    name:'Person 1',
    imgURL:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  },
  {
    id:2,
    name:'Person 2',
    imgURL:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    id:3,
    name:'Person 3',
    imgURL:'https://images.unsplash.com/photo-1567324216289-97cc4134f626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
  },
  {
    id:4,
    name:'Person 4',
    imgURL:'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  },
]
const GALLERY_LIST = [
  {
    id:1,
    imgURL:'https://v4.mui.com/static/images/image-list/breakfast.jpg',
  },
  {
    id:2,
    imgURL:'https://v4.mui.com/static/images/image-list/burgers.jpg',
  },
  {
    id:3,
    imgURL:'https://v4.mui.com/static/images/image-list/camera.jpg',
  },
  {
    id:4,
    imgURL:'https://v4.mui.com/static/images/image-list/morning.jpg',
  },
  {
    id:5,
    imgURL:'https://v4.mui.com/static/images/image-list/hats.jpg',
  },
  {
    id:6,
    imgURL:'https://v4.mui.com/static/images/image-list/honey.jpg',
  },
  {
    id:7,
    imgURL:'https://v4.mui.com/static/images/image-list/vegetables.jpg',
  },
  {
    id:8,
    imgURL:'https://v4.mui.com/static/images/image-list/plant.jpg',
  },
  {
    id:9,
    imgURL:'https://v4.mui.com/static/images/image-list/mushroom.jpg',
  },
  {
    id:10,
    imgURL:'https://v4.mui.com/static/images/image-list/olive.jpg',
  },
  {
    id:11,
    imgURL:'https://v4.mui.com/static/images/image-list/star.jpg',
  },
  {
    id:11,
    imgURL:'https://v4.mui.com/static/images/image-list/bike.jpg',
  },
];
const useStyles = makeStyles((theme)=>{
    return{
      container:{
        paddingTop:theme.spacing(10),
        paddingBottom:theme.spacing(10),
        position: 'sticky',
        top: 0,
      },
      title:{
        fontSize:16,
        fontWeight:500,
        color:"#555"
      },
      link:{
        marginRight:theme.spacing(2),
        color: "#555",
        fontSize:16,
      }
    }
});

const Rightbar = () => {
    const classes = useStyles();
    return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>Online Friends</Typography>
      <AvatarGroup max={3} style={{marginBottom:'20px'}}>
        {
          PERSON_AVATAR_LIST.map(person =>{
            return (
              <Avatar key={person.id} alt={person.name} src={person.imgURL}/>
            )
          })
        }
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>Gallery</Typography>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {
          GALLERY_LIST.map(img =>{
            return (
              <ImageListItem key={img.id}>
                <img src={img.imgURL} alt='img-item'/>
              </ImageListItem>
            )
          })
        }
      </ImageList>
      <Typography style={{marginTop:"20px"}} gutterBottom className={classes.title}>Categories</Typography>
      <div>
        <Link className={classes.link} variant="body2" href="#">Food</Link>
        <Link className={classes.link} variant="body2" href="#">Sport</Link>
        <Link className={classes.link} variant="body2" href="#">Music</Link>
        <Divider flexItem/>
        <Link className={classes.link} variant="body2" href="#">Movies</Link>
        <Link className={classes.link} variant="body2" href="#">Science</Link>
        <Link className={classes.link} variant="body2" href="#">Art</Link>
      </div>
    </Container>
  )
}

export default Rightbar