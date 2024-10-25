import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// UseState with Object as input

import React, {useState,useEffect} from 'react';
import './App.css';

function MutipleFunctionalComponents() {

const [showLogin,buttonFunction] = useState(false);


const handleClick = (showLogin) =>  {
  buttonFunction(showLogin);
}
 

return(
  <>
  <button onClick={()=>handleClick(!showLogin)}> {`${!showLogin ? 'Login' : 'Logout'}`} </button>
  {showLogin && <GetLoginScreen/>} 
  {!showLogin &&  <GetLogoutScreen/>}
  </>
);  
}

function GetLoginScreen (props) {
  const [loggedIn,buttonLoggedIn] = useState(false);
  const handleLogin = (loggedIn) => {
    buttonLoggedIn(loggedIn);
  }
  return (  
    <>
    {!loggedIn ?
    ( <>
    Name :<input type='text'></input>
    Password : <input type='password'/>
    <br/><button onClick={()=>handleLogin(!loggedIn)}> submit </button>
    </>) : 
    (
    <ShowWelcomePage/>)}
    </>
    ); 
}

function GetLogoutScreen (props) {
  return (  
    <div>
    Please login to Continue with the site.
    </div>
  );
}

function ShowWelcomePage (props){
let time = new Date(); 
return(  
  <>Logged in Time : {time.getHours() + ':' + time.getMinutes()}</>
);
}

export default MutipleFunctionalComponents;



import React, {useState,useEffect}from 'react';
import './App.css';

function UseEffectExample() {

  // To simplify the below one's we can use the mutiple use state to initialize the mutiple variable instead of object
  const [state, setState] = useState({ Name: '', Age: '' });
  const updatedValue = (event) => {
    // setState({
    //   ...state, [event.target.getAttribute('id')]: event.target.value
    // })
    setState({
     ...state, [event.target.getAttribute('id')] : event.target.value
    });    
  }

  const initializeTheGraphics = () => {
   console.log('Initializing Graphics');
  }

  useEffect(()=>{
    initializeTheGraphics();
    return(()=> {
    cleanupGraphics();
    });
  },[]);

  const cleanupGraphics = () => {
    console.log('Destroying Graphics');
  }

  const content= ` <br/> <br/>   <b> Name </b>  :${state.Name} </br> <b> Age </b> : ${state.Age}`;

  return (
    <div >
      {console.log('Render')}      
      Name:<input type="text"  id='Name' onChange={(event) => updatedValue(event)} /><br/>
      Age :<input type="number" id='Age' onChange={(event) => updatedValue(event)} /><br/>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
    </div>
  );
}

export default UseEffectExample;

import { useState } from 'react';
//import './App.css';
function UseStateHooks() {
    const [count, updateCountFunction] = useState(0);
    const updateCount = (count) => {
        updateCountFunction(count);
    }
    return (
        <div className="App">
            <header className="App-header">
                <>
                    <button onClick={() => updateCount(count + 1)}> Add </button>
                    <button onClick={() => updateCount(0)}> Reset </button>

                    {count}

                </>
            </header>
        </div>
    );
}
export default UseStateHooks;


function UseStateHooksWithObject() {

    // To simplify the below one's we can use the mutiple use state to initialize the mutiple variable instead of object
    const [state, setState] = useState({ Name: '', Age: '' });
    const updatedValue = (event) => {
      // setState({
      //   ...state, [event.target.getAttribute('id')]: event.target.value
      // })
      setState({
       ...state, [event.target.getAttribute('id')] : event.target.value
      });    
    }
  
  
    return (
      <div >
        <input type="text" title='Name' id='Name' onChange={(event) => updatedValue(event)} />
        <input type="number" title='Age' id='Age' onChange={(event) => updatedValue(event)} />
        {`Name : ${state.Name} Age : ${state.Age}`}
      </div>
    );
  }

  export default UseStateHooksWithObject;


/* Note
{} -> Curly braces in the return is called JSX Interpolation or JSX Expression
*/

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setitems] = useState(['Item1','Item2','Item3']);
  
  return (
    <>
     {items.map((item, index) => (
        CartItem(item)
      ))}    
    </>
  )
}

function CartItem(item) {
 let {count,handleClick} = useCounter();
  return (
    <>
      Cart
      <br/>
      <>
      {item}<button onClick={()=>handleClick('minus')}>-</button>
      {count}
      <button onClick={()=>handleClick('plus')}>+</button>
    </>
    </>
  );
}

function useCounter(){
  const [count,setCount] = useState(0);
  const handleClick = (action) =>{
    action === 'plus' ? setCount(count+1) : (count > 0) ? setCount(count-1) : setCount(0);
  }

 return {count,handleClick};
}
  


export default App;
