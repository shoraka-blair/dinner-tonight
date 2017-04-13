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

  const li = li => <ListItem key={li.id} {...li} />




//map(li, recipeToListItemObj(props.recipes))

const RecipeList = (props) => {
console.log("Do I have the recipes?", props.recipes)
  return (
  <div>
    <ul className="list">
      {
        compose(
          map(li),
          map(recipeToListItemObj)
        )(props.recipes)
      }
    </ul>
  </div>
  )
}





const mapStateToProps = (state) => (state)



const connector = connect(mapStateToProps)


export default connector(RecipeList)
