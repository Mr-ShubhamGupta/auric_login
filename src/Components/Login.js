import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  CircularProgress,
  Avatar,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "../Components/Atom/Input";
import Loader from "../Components/Loader";
import CustomButton from "./Atom/CustomButton";
import { useNavigate } from "react-router-dom";
import { postDataAxios } from "../Core/API";

const Login = (props) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    getUserId: "admin@auric.de",
    getPassword: "@dm!nP@$$w0rd",
    showPassword: false,
  });
  const [showLoader, setShowLoader] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = async () => {
    setShowLoader(!showLoader);
    let body = { username: values.getUserId, password: values.getPassword };

    const result = await postDataAxios("api/v1/identity/login", body);

    if (result.data.statusCode === 200) {
      // window.location.reload()
      navigate("/Home");
    } else {
      alert("Incorrect Password or username");
    }
  };
  const handleNavigation = () => {
    setShowLoader(!showLoader);
    navigate("/ForgotPassword");
  };
  return (
    <div className="login">
      <Grid container spacing={2}>
        <div className="loader-wrapper"> {showLoader && <Loader />} </div>
        <Grid item xs={7}>
          <img
            alt="backgroungimage"
            src="https://images.wallpaperscraft.com/image/single/road_marking_evening_clouds_horizon_120298_800x600.jpg"
          />
        </Grid>
        <Grid item xs={5}>
          <Grid item xs={12} className="middle_Com">
            <Avatar src="/broken-image.jpg" />
          </Grid>
          <Grid item xs={12} className="userId_grid">
            <Input
              label="User Id"
              value={values.getUserId}
              onChange={handleChange("getUserId")}
              id="user_id"
            />
          </Grid>
          <Grid item xs={12} className="userId_grid">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.getPassword}
                onChange={handleChange("getPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} className="userId_grid">
            <CustomButton
              label="Login"
              // fullWidth={false}
              onClick={handleClick}
            />
          </Grid>
          <Grid item xs={12} className="userId_grid">
            <CustomButton
              label="Forgot Your Password?"
              onClick={handleNavigation}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
