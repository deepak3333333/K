import { userLoginReducers,userSignupReducers } from "./reducers/userReducers";



const reducers=combineReducers({
    userLogin:userLoginReducers,
    userSignup:userSignupReducers,
})
