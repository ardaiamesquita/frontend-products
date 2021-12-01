//import axios from "axios"

const API_BACKEND = "http://localhost:3333/user";

const api = {
    register = async (username, password) =>{
        try{
            let response = await axios.post(API_BACKEND,{
                username: username,
                password: password
            })
            return true;
        //    console.log(response.data);
        } catch(error){
            return false;
           // console.error(error);
        }
    }
}

export default api;