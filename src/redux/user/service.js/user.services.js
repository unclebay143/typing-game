

// Service registration function
const registerPlayer = async (username, email, password) =>{
    console.log("service", username, email, password);
    return;
}

// Export object of service functions
const USERSERVICE = {
    registerPlayer
}

export default USERSERVICE;