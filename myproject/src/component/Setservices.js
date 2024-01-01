import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { observer } from "mobx-react"
import DataMobx  from '../dataStores/DataMobx'
import Button from '@mui/material/Button';

 const Setservices= observer(() => {
    let nav =useNavigate()
    const { register, handleSubmit } = useForm();
    const [massege, setmassege] = useState("");
    const [good, setGood] = useState(false);

    return(
        <>
          <form onSubmit={handleSubmit((data) => {
                        axios.post(`http://localhost:8787/service`, data)
                      .then(res => {
                        debugger;
                        const r=res.data;
                        console.log(r)
                        setmassege(r) 
                        setGood(true)
                        DataMobx.setgood(true);
                        {setTimeout(() => {
                          {nav('/Services')}
                     }, 1500)}
                      }).catch(err=>
                        setmassege(err.response.data)
                        )
                    }
            )}>
        <div >
          <br/>
                <TextField 
          id="outlined-password-input1"
          label="name"
          autoComplete="current-password"
          {...register("name")}
          placeholder="name"
        //  <br/> <br/>
         />
         <TextField
          id="outlined-password-input"
          label="id"
          autoComplete="current-password"
          {...register("id")}
          placeholder="id"
        />
          <br/> <br/>
        <TextField
          id="outlined-password-input"
          label="description"
          autoComplete="current-password"
          {...register("description")}
          placeholder="description"
        />
          {/* <br/> <br/> */}
        <TextField
          id="outlined-password-input"
          label="price"
          autoComplete="current-password"
          {...register("price")}
          placeholder="price"
        />
        <br/> <br/>
         <TextField
          id="outlined-password-input"
          label="duration"
          autoComplete="current-password"
          {...register("duration")}
          placeholder="duration"
        /><br/> <br/>
                <Button variant="contained" color="error" type="submit" >SEND</Button>
        <p>{massege}</p>
        {console.log(massege,"mmm")}
   </div>
    </form>
      </>
    )
});
export default  Setservices;