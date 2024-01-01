import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { observer } from "mobx-react";
import DataMobx from "../dataStores/DataMobx";
import { useNavigate } from "react-router-dom";
import Serve from "./Serve";
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

const Services = observer(() => {
  let nav=useNavigate();
  const [services, setservices] = useState([]);
  const [add, setadd] = useState(false);

  function getappointments() {
    axios.get(`http://localhost:8787/services`).then((res) => {
      setservices(res.data);
    });
  }

  useEffect(() => {
    getappointments();
  }, []);

  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 } }}></Box>
      {add&& nav('/Setservices')}
        <>
        <p id="pServe2">Our services:</p>
          <p >
            {services.length>0 &&
              services.map((i) => (
               <Serve id={i.id} name={i.name} description={i.description} />
              ))}
          </p>
          {console.log((DataMobx.list),"DataMobx")}
          {DataMobx.list&& 
            (
            <><Fab color="red"  aria-label="add" onClick={() => setadd(true)}>+
           </Fab>
           <br/><br/>
           <Button variant="contained"  color="error"  onClick={()=> nav('/PersonalDetails')} >Details</Button>
           </>
           )
          } <br/> <br/>
        </>  </>
  );});
export default Services;

