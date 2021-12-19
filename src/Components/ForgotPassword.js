import React, { useState } from "react";
import { Grid, Avatar, Alert, Stack } from "@mui/material";
import Input from "../Components/Atom/Input";
import CustomButton from "./Atom/CustomButton";
import { useNavigate } from "react-router-dom";
import { postDataAxios } from "../Core/API";
import Loader from "./Loader";

const ForgotPassword = (props) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    getUserId: "admin@auric.de",

    showPassword: false,
  });
  const [showLoader, setShowLoader] = useState(false);
  const [getAlert, setAlert] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = async () => {
    setShowLoader(!showLoader);
    let body = { email: values.getUserId };

    const result = await postDataAxios(
      "api/v1/accounts/users/sendforgotuserpasswordlink",
      body
    );

    if (result.data.statusCode === 200) {
      setShowLoader(showLoader);

      setAlert(!getAlert);
    } else {
      alert("Incorrect Password or username");
    }
  };

  return (
    <>
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
              <CustomButton
                label="Send Link to Email Address"
                fullWidth={false}
                onClick={handleClick}
              />
            </Grid>
            <Grid item xs={12} className="userId_grid">
              <CustomButton
                label="Back to Login Page"
                onClick={() => navigate("/Login")}
              />
            </Grid>
            <Grid item xs={12} className="userId_grid">
              {getAlert && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="success">
                    Reset Password link Successfully Sent
                  </Alert>
                </Stack>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default ForgotPassword;
