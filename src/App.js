
import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen.js'
import Header from './Header.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import RecipeComponent from './RecipeComponent.js'
import AddRecipeComponent from './AddRecipeComponent.js'
function App() {
  return (
    <div className="App">
      <>

      <Router>
      <Header/>
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/recipe" component={RecipeComponent}/>
      <Route path="/addrecipe" component={AddRecipeComponent}/>
      </Router>
    
      </>
    </div>
  );
}

export default App;
