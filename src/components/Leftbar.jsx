import React from 'react'
import { Home,Assignment,PhoneAndroid,Person,PhotoCamera,
  SlowMotionVideo,BookmarkBorder,Storefront,Settings,ExitToApp } from '@material-ui/icons';
import { Container, makeStyles, Typography, } from '@material-ui/core'
const useStyles = makeStyles((theme)=>{
    return{
      container:{
        height: '100vh',
        color: 'white',
        paddingTop:theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]:{
          backgroundColor:'white',
          color:'#555',
          border:'1px solid #e1dfdf',
        },
        position:'sticky',
        top: 0,
      },
      item:{
        display: 'flex',
        alignItems:'center',
        cursor: 'pointer',
        marginBottom:theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
          marginBottom:theme.spacing(2),
        }
      },
      text:{
        fontWeight:'500',
        [theme.breakpoints.down('sm')]:{
         display:'none',
        }
      },
      icon:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
          fontSize:'17px',
        }
      }
    }
});

const Leftbar = () => {
    const classes = useStyles();
    return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon}/>
        <Typography className={classes.text}>User</Typography>
      </div>
      <div className={classes.item}>
        <Assignment className={classes.icon}/>
        <Typography className={classes.text}>Blog</Typography>
      </div>
      <div className={classes.item}>
        <PhoneAndroid className={classes.icon}/>
        <Typography className={classes.text}>Contact</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon}/>
        <Typography className={classes.text}>Photos</Typography>
      </div>
      <div className={classes.item}>
        <SlowMotionVideo className={classes.icon}/>
        <Typography className={classes.text}>Media</Typography>
      </div>
      <div className={classes.item}>
        <BookmarkBorder className={classes.icon}/>
        <Typography className={classes.text}>Saved</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon}/>
        <Typography className={classes.text}>Store</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon}/>
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className={classes.text}>Log out</Typography>
      </div>
    </Container>
  )
}

export default Leftbar