import React from "react";
import Button from "@mui/material/Button";

const CustomButton = (props) => {
  const { label, className,fullWidth,onClick } = props;

  return (
    <>
      <Button variant="contained" fullWidth={fullWidth} onClick={onClick} >{label}</Button>
    </>
  );
};
export default CustomButton;
