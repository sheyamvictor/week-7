import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './counter';
import Random from './Random';
import Todo from './Todo';
import List from './List';
 import Colour from './Colour';
 import Login from './Login';
const root = ReactDOM.createRoot(document.getElementById('root'));

function ChangeName()
{

var [myname,setmyname]=useState("sheyam")

function change(){

setmyname("Joseph")

}

return(
  <div>
    <h1>{myname}</h1>

    <button onClick={change}>click</button>
  </div>
)

}











root.render(
<>

<ChangeName/>

<Counter/>

<Random/>

<Todo/>

<Colour/>

<List/>

<Login/>
</>
)
  