import React, {useState} from "react"; 
import Tweet from "./Tweet";
import './App.css'

function App() {

  
  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello there'},
    {name: 'Imran', message: 'I am Imran khan'},
  ])
 
  return (
    <div className="app">
     
     {users.map(user => (
       <Tweet name={user.name} message={user.message}/>
     ))}
      
    </div>
  );
}


export default App;