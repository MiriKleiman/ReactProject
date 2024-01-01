
import { observer } from "mobx-react";
import DataMobx from "../dataStores/DataMobx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'red' : 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:'red',
  border: '1px solid rgb(255, 157, 167)',
}));
const Serve= observer((props) =>  {
    const [doMeeting, setdoMeeting] = useState(false);
    let nav = useNavigate();
   
    return (
      <>  
     <Box sx={{ width: '30%' ,marginLeft:'35%',marginRight:'40%',height: '100%',  }}>
      <Stack spacing={2}>
        <Item id="item"> name: {props.name}
        <br/>
        description: {props.description}
        <br/>
        <div id="di">
        {!DataMobx.list && 
        (<Button  variant="contained" color="error" onClick={()=> (DataMobx.servicess=props.name)&&nav('/DoMeeting')}>  make a new meeting </Button>
       )}</div>
         </Item>
        <br/>
      </Stack>
    </Box>
        </>
        );});
  export default Serve;
    
    
  
  