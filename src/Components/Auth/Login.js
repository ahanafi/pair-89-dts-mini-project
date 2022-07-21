import "./Login.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Link } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
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

  return (
    <>
      <div className="login_main">
        <div className="login_row row ">
          <div className="login_right card">
            <div className="form_login">
              <div className="login_title">
                <h2>Form Login</h2>
                <p>Please input your credentials to below form</p>
              </div>
              <div className="login_btns">
                <Box
                  component="form"
                  noValidate
                  sx={{
                    "& .MuiInputBase-input": {
                      m: 1,
                      height: "4ch",
                      width: "35ch",
                    },
                    "& > :not(style)": { m: 1, width: "35ch" },
                    "& .MuiButtonBase-root": {
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingX: "10px",
                      width: "30px",
                    },
                    "& .MuiInputBase-input::after": {
                      color: "red",
                      borderBottom: "2px solid red",

                      "&focus": {
                        color: "pink",
                        borderBottom: "2px solid red",
                      },
                    },
                  }}
                  className="input_all"
                  autoComplete="off"
                >
                  <div className="sign_name">
                    <h5>Username</h5>
                    <TextField
                      sx={{}}
                      fullWidth
                      id="standard-basic"
                      className=""
                      variant="filled"
                      focused
                      size="small"
                      autoComplete="off"
                    />
                  </div>
                  <div className="sign_pass">
                    <h5>Password</h5>

                    <FormControl variant="filled" size="small" fullWidth>
                      <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                            </IconButton>
                          </InputAdornment>
                        }
                        autoComplete="off"
                      />
                    </FormControl>
                  </div>
                </Box>
                <div className="new_acc">
                  <Button
                    variant="contained"
                    size="large"
                    >
                    Contained
                  </Button>
                  <p>
                    Doen't have an Account? <br/> 
                    <Link to='/register'><b>Register Here</b></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
