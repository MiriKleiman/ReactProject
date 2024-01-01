import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
export default function Meeting() {
  const [ddata, setData] = useState([]);
  const [goser, setgoser] = useState(false);
  let nav =useNavigate()
  function getappointments() {
    axios.get(`http://localhost:8787/appointments`).then((res) => {
      debugger;
      let arr = sortArr(res.data);
      setData(arr);
      console.log(arr, "after");
    });
  }
  function sortArr(arrCopy2) {
    console.log(arrCopy2);
    return arrCopy2?.sort(function (a, b) {
      return new Date(b.dateTime) - new Date(a.dateTime);
    });
  }
  useEffect(() => {
    getappointments();
  }, []);
  return (
    <>
      <h1>meetings</h1>
      <p>
        {ddata &&
          ddata?.map((i) => (
            <Meet
              id={i.id}
              name={i.name}
              serviceType={i.serviceType}
              dateTime={i.dateTime}
              clientName={i.clientName}
              clientPhone={i.clientPhone}
              clientEmail={i.clientEmail}
            />
          ))}
      </p>
      {goser&&nav('/PersonalDetails')}
      <Button variant="contained" color="error" onClick={()=>setgoser(true)}>Details</Button>
      <br/>
      <br/>
    </>
  );
}

function Meet(props) {
  function sameDay(date) {
    return date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
}
function sameWeek(date) {
  return date.getDate() >= new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()&&
  date.getDate() < new Date().getDate()+7 && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
}
  return (
    <>
      <div
       className={
         sameDay(new Date(props.dateTime))
            ? "red"
            :  sameWeek(new Date(props.dateTime))
            ? "orange"
            : "green"
        } 
      >
        {console.log(props.dateTime.getYear,"my")}
        {console.log(new Date().getYear(),"not my")}
      <div className="bor">
      <p>serviceType: {props.serviceType}</p>
      <p>clientName: {props.clientName}</p>
      <p>dateTime:   {props.dateTime}</p>
      {/* <p>clientPhone: {props.clientPhone}</p> */}
      {/* <p>clientEmail: {props.clientEmail}</p> */}
      </div>
      <br/>
      </div>
    </>
  );
}
