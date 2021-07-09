
import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import HomeScreen from './HomeScreen.js'
import Header from './Header.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import RecipeComponent from './RecipeComponent.js'
import Form from './Form.js'
import Add from './Add.js';

function App() {

  

  return (
    <div className="App">
      <>
      
      
          <Router>
            
          <Header/>
            <>      
          

            {/*add recipe page */}
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/recipe" component={RecipeComponent}/>
            <Route path="/addRecipe" component={Add}/>
            
     

            {/* <Route exact path="/">
            <HomeScreen/>
            </Route> */}
            </> 
          
          </Router>
   
      </>
    </div>
  );
}

export default App;
