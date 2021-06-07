import USERSERVICE from "../service.js/user.services";


// Registration
export const register = ({username, email, password}) => dispatch =>{
    console.log("action", username, email, password);
    USERSERVICE.registerPlayer(username, email, password)
}


