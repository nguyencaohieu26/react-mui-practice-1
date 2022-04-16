import React,{useState} from 'react'
import {Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme)=>{
    return{
      fab:{
          position: 'fixed',
          bottom: 10,
          right: 10,
      },
      container:{
          width: 500,
          height: 550,
          background: 'white',
          position: 'absolute',
          top: 0,
          bottom:0,
          right:0,
          left: 0,
          margin: 'auto',
          [theme.breakpoints.down('sm')]:{
              width: "100vw",
              height: "100vh",
          }
      },
      form:{
          padding: theme.spacing(2),
      },
      item:{
          marginBottom:theme.spacing(2),
      }
    }
});

const AddPost = () => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [openAlert,setOpenAlert] = useState(false);

    const handleClose = (e,reason) =>{
        if(reason === 'clickaway'){
            return;
        }
        setOpenAlert(false);
    }

    return (
    <>
        <Tooltip title="Add" aria-label='add' onClick={()=>setOpen(true)}>
            <Fab color='primary' className={classes.fab}>
                <Add/>
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
                <form autoComplete='off' className={classes.form} action=''>
                    <div className={classes.item}>
                        <TextField label='Title' size='small' style={{width:"100%"}}/>
                    </div>
                    <div className={classes.item}>
                        <TextField multiline rows={4} placeholder='Tell your story..' variant='outlined' label='Description' size='small' style={{width:"100%"}}/>
                    </div>
                    <div className={classes.item}>
                        <TextField select label="Visibility" value="Public">
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel component="legend">Who can comment?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel
                             value="Everybody"
                             control={<Radio size='small'/>}
                             label="Everybody"
                            />
                            <FormControlLabel
                             value="My friends"
                             control={<Radio size='small'/>}
                             label="My friends"
                            />
                            <FormControlLabel
                             value="Nobody"
                             control={<Radio size='small'/>}
                             label="Nobody"
                            />
                            <FormControlLabel
                             value="Custom"
                             disabled
                             control={<Radio size='small'/>}
                             label="Custom (Premium)"
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant='outlined' color='primary' style={{marginRight:"10px"}} onClick={()=>setOpenAlert(true)}>Create</Button>
                        <Button variant='outlined' color='secondary' onClick={()=>setOpen(false)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}   anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
>
            <Alert onClose={handleClose} severity="success">This is a success message!</Alert>
        </Snackbar>
    </>
  )
}

export default AddPost