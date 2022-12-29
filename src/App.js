import React, { useState } from 'react';


import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

const App = () => {
  const [userList,setUserList]=useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUserList((prevUsersList)=>{ 
      return[...prevUsersList,{id:Math.random().toString(),name:uName,age:uAge}];
    });

  }
  return <div>
    <AddUser onAdduser={addUserHandler}/>
    <UserList users={userList}/>

  </div>
};

export default App;
