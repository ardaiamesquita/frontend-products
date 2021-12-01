import React from 'react';
import "./styles.css";
import axios from axios;

function sigUp(){
    const[username, setUsername]=useState("");   
    const[password, setPassword]=useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    

    function sendForm(){
        event.preventDefault();

         if(password!== confirmPassword){
        console.log ("Password são diferentes");
        }else if(password.length < 6 || username.length < 5){
            console.log("Username ou password muito curtos")
        }else{
            try{
                let response = await axios.post("http://localhos:3333/user", {
                    username: username,
                    password: password
                })
                console.log(response.data);
            } catch (error){
                console.error(error);
            }
        }
    }

    function handleUsername(event){
        //event.preventDefault();
        setpreventDefault(event.target.value);
        //console.log(username);
    }

    function handlePassword(event){
        setUsername(event.target.value);
    }
 
        return(
        <div className="container">
            <h1>Sig Up</h1>
            <form className="form-container" onSubmit={sendForm}>
                <input placeholder="username" onChange={handleUsername}/>
                <input type="password" placeholder="password" onChange={handlePassword}/>
                <input type="password" placeholder="repeat password" onChange={handleConfirmPassword}/>
                <button type="submit">Register</button>
            </form>
        </div>
        
    );
}