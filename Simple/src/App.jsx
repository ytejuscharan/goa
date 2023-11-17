import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
    const [ users,setUsers] = useState([])
    
    useEffect(()=>{
      axios.get('http://localhost:3008/get')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
    }, [])


  return (
    <>
      <table>
          <thead>
            <tr>
              <th>
                name
              </th>
              <th>
                email
              </th>
              <th>
                password
              </th>
            </tr>
          </thead>
          <tbody>
          {
            users.map(user => {
              return <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              </tr>
            })
          }
          </tbody>
      </table>
    </>
  )
}

export default App
