import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { observer } from "mobx-react"
import DataMobx  from '../dataStores/DataMobx'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const SetPersonalDetails= observer(() => {
let nav=useNavigate();
    const { register, handleSubmit } = useForm();


    return (
        <>
            <form onSubmit={handleSubmit((data) => {
                console.log(data.address)
              axios.put(`http://localhost:8787/businessData`, data)
              .then(res => {
               console.log(res.data)
              })
              nav('/PersonalDetails')
            }
            )}>
              <br/>
                   <TextField
          id="outlined-password-input"
          label="name"
          autoComplete="current-password"
          {...register("name")}
          placeholder={DataMobx.person.name}
        /> 
        {/* <br/> <br/> */}
         <TextField
          id="outlined-password-input"
          label="address"
          autoComplete="current-password"
          {...register("address")}
          placeholder={DataMobx.person.address}
        />
         {/* <br/> <br/> */}
        <TextField
          id="outlined-password-input"
          label="phone"
          autoComplete="current-password"
          {...register("phone")}
          placeholder={DataMobx.person.phone}
        /> 
 <br/> <br/>
         <TextField
          id="outlined-password-input"
          label="owner"
          autoComplete="current-password"
          {...register("owner")}
          placeholder={DataMobx.person.owner}
        />
         {/* <br/><br/> */}
        <TextField
          id="outlined-password-input"
          label="description"
          autoComplete="current-password"
          {...register("description")}
          placeholder={DataMobx.person.description}
        />
         {/* <br/><br/> */}
         <TextField
          id="outlined-password-input"
          label="logo"
          autoComplete="current-password"
          {...register("logo")}
          placeholder={DataMobx.person.logo}
        />
        <br/>   <br />
                <Button variant="contained" color="error" type="submit" >SEND</Button>
            </form>
        </>
    )
});
export default  SetPersonalDetails;