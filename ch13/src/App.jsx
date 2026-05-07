import { useState } from 'react'
import UserListTable from './components/UserListTable';
import UserRigister from './components/UserRegister';

function App() {
  const [ users, setUsers ] = useState([]);
  
  return (
    <div>
      <UserRigister users={users} setUsers={setUsers}/>
      <UserListTable users={users} setUsers={setUsers}/>
    </div>
  )
}

export default App