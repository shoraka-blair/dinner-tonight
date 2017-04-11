import React from 'react'
import { connect } from 'react-redux'
import { map, compose } from 'ramda'
import ListItem from '../components/list-item'



const recipeToListItemObj = recipe => ({
    _id: recipe._id,
    title: recipe.title,
    imageUrl: recipe.imageUrl,
    rating: recipe.rating,
    linkUrl: '/recipes/' + recipe._id,
    linkDescription: 'View Recipe'
  })



//map(li, recipeToListItemObj(props.recipes))
const li = li => <ListItem key={li._id} {...li} />

const RecipeList = function (props) {
console.log("whatt",props.recipes)
    return (
    <ul className="list">
      {
        compose(
          map(li),
          map(recipeToListItemObj)
        )(props.recipes)
      }
    </ul>
  )
}



const connector = connect (state => state )



export default connector(RecipeList)
