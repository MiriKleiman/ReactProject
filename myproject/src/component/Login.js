import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react";
import DataMobx from "../dataStores/DataMobx";
import { useNavigate } from "react-router-dom";
import LogRocket from "logrocket";
import { Button, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

const Login = observer(() => {
  console.log(DataMobx.logo);
  let nav = useNavigate();
  
  const [ddata, setData] = useState({});
  const [massege, setmassege] = useState("");
  const [place, setPlace] = useState({ name: "name", password: "password" });
  const { register, handleSubmit } = useForm();
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  LogRocket.init("app/id");
  const goToAerver = (data) => {
    debugger;
    axios
      .post(`http://localhost:8787/login`, data)
      .then((res) => {
        debugger;
        const r = res.data;
        console.log(r);
        setmassege(r);
        DataMobx.setlist(true);
        setData(JSON.stringify(data));
        setShowPersonalDetails(true);
        console.log("/PersonalDetails");
        nav("/PersonalDetails");
      })
      .catch((err) => setmassege(err.response.data));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          goToAerver(data);
        })}
      >
        <Grid className="img1" container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // backgroundImage: `url(${DataMobx.person.logo})`,
               backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1698429260304-56c5a60f419b?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}/>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }} >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <TextField
                {...register("name")}
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus />
              <TextField
                {...register("password")}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"/>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="error">
                Sign In
              </Button>
            </Box>
            <p>{massege}</p>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid id="link" item>
                <Link  href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>  </Grid>   </Grid>  </Grid>
      </form> </>
  );});
export default Login;