import React, { useState } from 'react'
import Userlist from './components/Userlist';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import kitsune from './assets/img/kitsune.png';
import { Helmet } from 'react-helmet';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tiko', username: 'tikopaci' },
    { id: uuidv4(), name: 'Mani', username: 'chelmani' },
    { id: uuidv4(), name: 'Roman', username: 'juanroman' },
  ]

  const [users, setUsers] = useState(usersData);

  //Add users
  const addUser = user => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

  //Delete users
  const delUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  //Edit users
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '', 
    username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  

  return (
    <div className="container mb-4">
      <Helmet>
        <style>{'body { background-color: #8a94b3};'}</style>
      </Helmet>
      <div className="container text-center">
        <h1>CRUD app using React Hooks </h1>
        <img src={kitsune} className="kitsune" alt="masked guy" />
        <h3>🀄 Santiago Paci 🃏</h3>
      </div>
      <div className="flex-row colorFondo">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add users</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Userlist 
            users={users} 
            delUser={delUser} 
            editRow={editRow} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
