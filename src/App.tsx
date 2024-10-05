import React from 'react';
import './App.css';

function App() {
  let name='';
  let pass='';
  return (
    <div className="App">
      Welcome to Amezone <br/>    
    Name : <input type='text' id='name' onChange={(event)=>{
      name = event.target.value
    }}/>
    Pass : <input type='password' id='password' onChange={(event)=>{
      pass = event.target.value
    }}/>
    <button>Submit</button>
    <div>
    <br/>Validation : <br/>Name : {name && name.length > 0 ? name : 'Enter Name'} <br/> Password {pass && pass.length > 0 ? name : 'Enter Password'}
    </div>
    </div>
  );
}

export default App;
