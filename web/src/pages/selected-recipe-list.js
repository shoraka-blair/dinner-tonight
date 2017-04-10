import React from 'react'
import { connect } from 'react-redux'
import { filter,map, compose } from 'ramda'
import ListItem from '../components/list-item'



const recipeToListItemObj = recipe => ({
    _id: recipe._id,
    title: recipe.title,
    imageUrl: recipe.imageUrl,
    rating: recipe.rating,
    linkUrl: '/recipes/' + recipe._id,
    linkDescription: 'View Recipe'
  })

const li = li => <ListItem key={li._id} {...li} />

const selectedRecipes = (recipe) => {
  return(
  recipe.rating === 79
)}


const SelectedRecipeList = function (props) {
console.log("hello",props)
console.log("hello1", filter(selectedRecipes, props.recipes))

    return (
    <ul className="list">
      {
        compose(
          map(li),
          map(recipeToListItemObj),
          filter(selectedRecipes)
        )(props.recipes)
      }
    </ul>
  )
}


const connector = connect (state => state )



export default connector(SelectedRecipeList)
