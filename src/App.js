import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UserLists";


function App() {
    const [userLists, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
        });
    }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
        <UserLists  users={userLists}/>
    </div>
  );
}

export default App;
