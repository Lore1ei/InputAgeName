import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UserLists";
import Wrapper from "./components/Helpers/Wrapper";


function App() {
    const [userLists, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
        });
    }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
        <UserLists  users={userLists}/>
    </React.Fragment>
  );
}

export default App;
