import React from 'react'
import RecipeCard from './RecipeCard.js';
import  { useState,useEffect } from "react";
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import AddRecipeComponent from './AddRecipeComponent.js'
import {Searchbox} from './Searchbox.js'

function RecipeComponent(){
  // const [searchRecipe, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {  
    // Recipe data from the MOCK API
    fetch("https://60b7292217d1dc0017b89247.mockapi.io/recipe", {
      method: "GET"
    })
      .then((rec) => rec.json())
      // .then((rec)=>console.log(rec))
      .then((rec) => setRecipes(rec));
  }, []);
   const [searchfood,setSearchfood]=useState("")
   //console.log(recipes)
  const [deletefood,setDeleteFood]=useState("")
const setdeletetitle=(id)=>{
  //console.log(id)
  setRecipes(
    recipes.filter((arr)=>{
      if(!arr.id.includes(id))
      {
        return arr;
      }
      //console.log(typeof(id),typeof(arr.id))
    })
  )
  
}
console.log(recipes)
  return(
          
  <>


  
   
  
      <Searchbox setSearchfood={setSearchfood} />
    
      {recipes
         .filter((rec)=>{
           if(searchfood==="")
           {
             return rec;
           }
          //  console.log();
          //  console.log(rec);
          //  console.log(rec.title);
           else if(
             
             rec.title.toLowerCase().includes(searchfood.toLowerCase())
        
           )
           {
             return rec;
           }
          
         }) 
         
       
       .map((elem)=>{
        
        //console.log(elem.id)
         return(
          <RecipeCard  id = {elem.id} title={elem.title} image={elem.foodimage}  ingredients ={elem.ingredients} deletekey={setdeletetitle}/>

          
          );

        
            })}

        <Link to={`/addRecipe`}>
          <AddRecipeComponent />
        </Link>
      
     {/*container */}

   </>
  )
}

export default RecipeComponent
