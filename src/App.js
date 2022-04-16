import { Grid } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Righbar from './components/Rightbar';
import Feed from './components/Feed';
import { makeStyles } from "@material-ui/core";
import AddPost from "./components/AddPost";
const useStyles = makeStyles((theme)=>{
  return {
    right:{
      [theme.breakpoints.down('sm')]:{
        display:'none',
      }
    }
  }
})

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar/>
      <Grid container>
        <Grid item sm={2} xs={2}><Leftbar/></Grid>
        <Grid item sm={10} md={7} xs={10}><Feed/></Grid>
        <Grid item sm={3} className={classes.right}><Righbar/></Grid>
      </Grid>
      <AddPost/>
    </div>
  );
}

export default App;
