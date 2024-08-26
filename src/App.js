import React from 'react';
import Header from './Components/Header';
import './ComponentsCss/Div.css';
import Searchbar from "./Components/Searchbar"


function App() {
  return (
    <div className = "outercontainer"> 
    <div className = "innercontainer">
      <Header />
      <Searchbar/>
    </div>



    </div>
  );
}

export default App;