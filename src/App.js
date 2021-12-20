import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const rand= require('random-key');


function App() {

  /* console.log(rand.generate()); */
  const [userList, setUserList]=useState([]);
  const addUserHandeler=(uName, uAge)=>{
    setUserList((prevUserList)=> {
      return [...prevUserList,{name: uName, age: uAge, id: rand.generate()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandeler} />
      <UserList users={userList} />

    </div>
  );
}

export default App;
