
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Display from './Components/Display';
import Records from './Components/Records';
import { useState } from 'react';
import Addproduct from './Components/Addproduct';

function App() {

  let [flag,setFlag] = useState(false);
  function funadd(){
    setFlag(!flag)
  }
  return (
    <>
      <Routes>
        <Route path='/display' Component={Records}></Route>
      </Routes>
      <input type='button' value='add' onClick={funadd}></input>
        {
          flag && <Addproduct/>
        }
    </>
  );
}

export default App;
