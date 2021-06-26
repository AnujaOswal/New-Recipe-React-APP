
import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import HomeScreen from './HomeScreen.js'
import Header from './Header.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import RecipeComponent from './RecipeComponent.js'
import Form from './Form.js'

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {  
    // Recipe data from the MOCK API
    fetch("https://60b7292217d1dc0017b89247.mockapi.io/recipe", {
      method: "GET"
    })
      .then((rec) => rec.json())
      .then((rec) => setRecipes(rec));
  }, []);

  return (
    <div className="App">
      <>
      
        <Header/>
          <Router>
            <Switch>  
            <>      
           <Route path="/recipe">
           <RecipeComponent recipes={recipes} setRecipes={setRecipes}/>
           </Route>

            {/*add recipe page */}
            <Route path="/addRecipe">
            <Form recipes={recipes} />
            </Route>
     

            <Route exact path="/">
            <HomeScreen/>
            </Route>
            </> 
            </Switch>
          </Router>
   
      </>
    </div>
  );
}

export default App;
