import logo from './logo.svg';
import React from 'react';
import Header from './Components/header';
import Students from './Components/students';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className = 'main'>

        <Header />
        <Students name = 'Neha Nizam' uni = 'NED University' score = {450} />
        <Students name = 'Rooma Khan' uni = 'NED University' score = {440} />
        <Students name = 'Bisma Wasim' uni = 'Karachi University' score = {430} />
        <Students name = 'Ahsan Khan' uni = 'Sir Syed University' score = {420} />
        <Students name = 'Izkah Jawaid' uni = 'NED University' score = {445} />
        <Students name = 'Mubeen Nizam' uni = 'NED University' score = {449} />
        <Students name = 'Mahavish Nizam' uni = 'Jinnah University' score = {435} />
      
      </div>

    )
  }
}



export default App;
