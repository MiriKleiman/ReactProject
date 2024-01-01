import { useState } from "react";
import Services from "./Services";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import DataMobx from "../dataStores/DataMobx";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const PersonalDetails = observer(() => {
  let nav = useNavigate();
  const [service, setService] = useState(false);
  const [meeting, setMeeting] = useState(false);
  const [setDetails, setSetDetails] = useState(false);
  const [bservices, setbservices] = useState(false);

  function gget()
  {
    axios.get(`http://localhost:8787/businessData`).then((res) => {
     DataMobx.setperson(res.data);
     setbservices(true)
    });
  }
  useEffect(() => {
    gget();
  },  false);

  return (
    <>
      <Card sx={{ maxWidth: 745}} className="card">  
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={DataMobx.person.logo}
            // image="https://plus.unsplash.com/premium_photo-1698429260304-56c5a60f419b?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {DataMobx.person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">

          <p id="psize">{DataMobx.person.address}</p>
          <p>{DataMobx?.person.phone}</p>
          <p>{DataMobx?.person.owner}</p>
          <p>{DataMobx?.person.description}</p>
           
              {DataMobx.list && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setSetDetails(true)}>
                  set </Button>
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <br />
      {setDetails ? (
        nav("/SetPersonalDetails")
      ) : (
        <>
          {service && <Services />}
          {DataMobx.list === true && (
            <Button id="but2"
                  variant="contained"
              color="error"
              onClick={() => setService(true)}
            >
              {" "}
              Business services{" "}
            </Button>
          )}

          {meeting && nav("/Meeting")}
          {DataMobx.list === true && (
            <Button id="but1"
              variant="contained"
              color="error"
              onClick={() => setMeeting(true)}
            >
              {" "}
              appointments
            </Button>
          )}
        </>
      )}
      <br /> <br />
    </>
  );});
export default PersonalDetails;
