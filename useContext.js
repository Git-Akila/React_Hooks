In createTuto.js
----------------

  import React,{useState,createContext} from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

function ContextTuto(){
    const [username, setUsername] =useState("");
    return(

        <AppContext.Provider value={{username, setUsername}}>
            <Login/> <User/>
        </AppContext.Provider>
    )
}

export default ContextTuto;




IN Login.js
-----------

  import React, {useContext} from 'react';
import {AppContext} from './ContextTutorial';

function Login(){
    const {setUsername}=useContext(AppContext);
    return(
        <>
        <input onChange={(event)=>{
            setUsername(event.target.value);
        }}
        
        /></>
    )
}
export default Login;


In User.js
----------

  import React, {useContext} from 'react';
import {AppContext} from './ContextTutorial';
function User(){
    const {username}=useContext(AppContext);
    return(
        <>
        <h1>
            User:{username}</h1></>
    )
}

export default User;


  
