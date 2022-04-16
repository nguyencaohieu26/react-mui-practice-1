import React,{useState} from 'react'
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Mail, Search,Notifications, CancelOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>{
    return{
      toolbar:{
        display: 'flex',
        justifyContent:'space-between'
      },
      logoLg:{
        display: 'none',
        [theme.breakpoints.up("sm")]:{
          display: 'block',
        }
      },
      logoSm:{
        display: 'block',
        [theme.breakpoints.up("sm")]:{
          display: 'none',
        }
      },
      search:{
        display: 'flex',
        alignItems:'center',
        padding: '4px 20px',
        backgroundColor:alpha(theme.palette.common.white,0.15),
        '&:hover':{
          backgroundColor:alpha(theme.palette.common.white,0.3),
        },
        width: '40%',
        borderRadius:theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]:{
          display: (props)=> (props.openSearch ? "flex" : "none"),
          width: '60%',
        }
      },
      input:{
        color: 'white',
        marginLeft:theme.spacing(2)
      },
      icons:{
        gap: '1rem',
        alignItems:'center',
        display: (props)=> (props.openSearch ? "none" : "flex"),
       
      },
      avatar:{
        objectFit:'cover',
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
      searchButton:{
         cursor: 'pointer',
         [theme.breakpoints.up("sm")]:{
          display: "none",
        }
      },
      cancel:{
        cursor: 'pointer',
        [theme.breakpoints.up("sm")]:{
          display: "none",
        }
      }
    }
});

const Navbar = () => {
  const [openSearch,setOpenSearch] = useState(false);
  const classes = useStyles({openSearch});

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLg}>LOGO</Typography>
        <Typography variant='h6' className={classes.logoSm}>Logo</Typography>
        <div className={classes.search}>
          <Search/>
          <InputBase placeholder='Search...' className={classes.input}/>
          <CancelOutlined className={classes.cancel} onClick={()=>setOpenSearch(false)}/>
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpenSearch(true)}/>
          <Badge badgeContent={4} color="secondary"> <Mail/></Badge>
          <Badge badgeContent={2} color="secondary"><Notifications/></Badge>
          <Avatar className={classes.avatar} alt='John Doe' src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'/>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar