import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Myform} from './Myform'
import {MyTable} from "./MyTable";
import {generate} from "shortid";

const App = () => {
    const [rows,setRows] = useState([{
            id:'23',
            firstName: 'Sadiya',
            lastName:'Khan',
            email:'asd@ga.ss'
    }]);
  return (
    <div className="App">
     <Myform onSubmit={data => {
         setRows(currentRows => [{
         id: generate(),
         ...data
     },
             ...currentRows
         ]);
     } }/>
        <MyTable rows = {rows}/>
    </div>
  );
};

export default App;
