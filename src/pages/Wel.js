import {Dialog,withStyles,Box,Typography,makeStyles,List,ListItem} from '@material-ui/core';


const useStyle=makeStyles({
  components:{
      display:'flex',
      backgroundColor:'#18b684'
  },
  leftComponents:{
        padding:'56px  0 56px 56px'
  },
  qrcode:{
    height:234,
    width:234,
    padding:'50px  0 0 50px'
  },
  title:{
    fontSize:26,
    marginBottom:25,
    color:'#525252', 
    fontWeight:300, 
 },

 listitem: {
       '& > *':{
         fontSize:18,
         padding:0,
         marginTop:15,
         lineHeight:'28px',
         
       }
 }
  
 
})

const style={
  dialogPaper:{
          height:'100%',
          width:'100%',
          marginTop:'3%',
          boxShadow:'none',
          borderRadius:'3px',
          maxHeight:'70%',
          maxWidth:'71%',
          overflow: 'hidden'

   }
}

const Logins = ({classes}) => {
  const classname=useStyle();
  const urlToImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiBOLy5AgG04h3dLavDXgGthO7kwIHRc1URbyDyU&s";
  
  return (<>
       <Dialog
       className={classname.dialogPaper}
       open='true'
       classes={{paper: classes.dialogPaper}}
       BackdropProps={{style:{backgroundColor:'unset'}}}
       >
         <Box className={classname.components}>
           <Box className={classname.leftComponents}>
                <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                <List className={classname.listitem}>
                  <ListItem>1. Open whatsApp on your phone</ListItem>
                  <ListItem>2. Tap &nbsp;<h3 className={classname.menu}>Menu ⁝</h3>&nbsp; or &nbsp;<h3 className={classname.menu}>Seting </h3>&nbsp; and select &nbsp;<h3 className={classname.menu}>Linked Device</h3>&nbsp;</ListItem>
                  <ListItem>3. Point your phone to this screen to capture this code</ListItem>
                </List>
           </Box>
           <Box style={{position:'relative'}}>
                <img src={urlToImg} alt="imageUrl" className={classname.qrcode}/>
                <Box style={{position:'absolute',left:'50%',top:'40%'}}>
              
              </Box>
           </Box>
         </Box>
       </Dialog>
    </>
  )
}

export default withStyles(style)(Logins);
//chat appuser