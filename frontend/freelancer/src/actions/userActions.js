import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

export const signup = (fname, lname, email, password) => async () => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });
    const config = {
      Headers: {
        "Content-type": "applcation/json",
      },
    };
    const { data } = await axios.post("/api/users/register/", {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    },config);
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};

export const login = ( email, password) => async () => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const config = {
        Headers: {
          "Content-type": "applcation/json",
        },
      };
      const { data } = await axios.post("/api/users/login/", {
        
        email: email,
        password: password,
      },config);
      dispatch({
        type: USER_LOGIN_SUCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.details
            ? error.response.data.details
            : error.message,
      });
    }
  };