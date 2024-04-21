import axios from "axios";
import { combineReducers } from 'redux';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";


export const userSignupReducers=(state={},action)=>{
    switch(action.type){
        case USER_SIGNUP_REQUEST:
            return{loading:true}
        case USER_SIGNUP_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case USER_SIGNUP_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }

}

