import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { observer } from "mobx-react";
import DataMobx from "../dataStores/DataMobx";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Button, Typography, Container } from "@mui/material";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DoMeeting = observer(() => {
  const { register, handleSubmit } = useForm();
  const [getappointment, setgetappointment] = useState("");
  const [good, setgood] = useState(false);
  const [blur, setblur] = useState("");
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in 'YYYY-MM-
  let nav = useNavigate();
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: "40px" }}></Container>
      <div>
        <Button onClick={handleOpen}></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ADD A NEW APPOINTMENT IN: {DataMobx.servicess}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>

            <form
              onSubmit={handleSubmit((data) => {
                 axios.post(`http://localhost:8787/appointment`, data)
                  .then((res) => {
                    setgood(true);
                    setgetappointment(res.data);
                    console.log(res.data);
                    setblur("");
                    {
                      setTimeout(() => {
                        {
                          nav("/");
                        }
                      }, 1500);
                    }
                  })
                  .catch((err) => {
                    setblur("blur");
                    setgetappointment(
                      err.response.data + "please, write another date"
                    );
                  });
              })}>
              <div className="text">
                <TextField
                  label="serviceType"
                  id="filled-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                  {...register("serviceType")}
                  value={DataMobx.servicess}
                />
                <TextField
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                  id="filled-start-adornment"
                  label="id"
                  autoComplete="current-password"
                  {...register("id")}
                  placeholder="id"
                />
                <TextField
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                  id={blur}
                  type="date"
                  inputProps={{ min: currentDate }}
                  autoComplete="current-password"
                  {...register("dateTime")}
                />
                <TextField
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                  id="filled-start-adornment"
                  label="clientName"
                  autoComplete="current-password"
                  {...register("clientName")}
                  placeholder="clientName"
                />
                <TextField
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                  id="filled-start-adornment"
                  label="clientPhone"
                  autoComplete="current-password"
                  {...register("clientPhone")}
                  placeholder="clientPhone"
                />
                <TextField
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                  id="filled-start-adornment"
                  label="clientEmail"
                  type="email"
                  autoComplete="current-password"
                  {...register("clientEmail")}
                  placeholder="clientEmail"/>
              </div>
              {console.log(DataMobx.servicess)} <br />
              <div id="but">
                <br/><br/><br/><br/>
                <Button type="submit" variant="outlined" color="error">
                  SEND
                </Button></div>
              <p>{getappointment}</p>
            </form>
          </Box></Modal> </div>
    </>
  );});
export default DoMeeting;