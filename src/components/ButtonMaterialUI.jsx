import {Button,makeStyles} from '@material-ui/core'
import { Person } from '@material-ui/icons';
import {purple} from '@material-ui/core/colors'

const useStyles = makeStyles((theme)=>{
  return {
    btn:{
      color: purple[900],
      background: theme.palette.success.dark,
      '&:hover':{
        background:theme.palette.success.light,
      }
    }
    
  }
})

function ButtonMaterialUI() {
  const classes = useStyles();
  return (
    <div >
        <Button 
        className={classes.btn}
        size='small'
        variant='outlined'
        startIcon={<Person/>}
        >Click me</Button>
    </div>
  );
}

export default ButtonMaterialUI;
