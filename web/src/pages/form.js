import React from 'react'
import { connect } from 'react-redux'
import CatControl from '../components/cat-control'
import CuisineControl from '../components/cuisine'
import ListItem from '../components/list-item'

import { map, filter, compose, contains, equals , intersection, allPass} from 'ramda'



const Form = (props) => {
console.log("do i have the recipes?", props)
console.log("categories", props.recipe)

const recipeToListItemObj = recipe => ({
    _id: recipe._id,
    title: recipe.title,
    imageUrl: recipe.imageUrl,
    rating: recipe.rating,
    linkUrl: '/recipes/' + recipe._id,
    linkDescription: 'View Recipe'
  })

const li = li => <ListItem key={li._id} {...li} />

//
// const selectedRecipes = (recipe) => {
//   return (
//     (recipe.categories===props.control)
//
// )}

console.log("MMMMM", props.cuisineControl)

  return (

    <div className="pa4">
      <h3 className="pa2">Select Categories:  {props.control}</h3>
        <CatControl
          value={props.control}
          onChange={props.changeCat}
          />
      <h3>Select Cuisine:  {props.cuisineControl}</h3>
        <CuisineControl
          value={props.cuisineControl}
          onChange={props.changeCuisine}
         />
      <div className="pa4">
         <button
         className="pa2 square"
         onSubmit={props.submit}>submit</button>
      </div>
      <h3>{props.control}</h3>
      <h3>{props.cuisineControl}</h3>
      <h3>Selected Recipes:</h3>
      <ul className="list">
        {
          compose(
            map(li),
            map(recipeToListItemObj),
            filter(r => r.cuisine === props.cuisineControl),
            filter(r => intersection(r.categories, props.control).length===props.control.length)
          )(props.recipes)

        }
      </ul>
    </div>

    )

}


const mapStateToProps = (state) => (state)


const mapActionsToProps = (dispatch) => ({

  changeCat: v => {
    dispatch({type: 'SET_CONTROL', payload: v})
  },
  changeCuisine: v => {
    dispatch({type: 'SET_CUISINE_CONTROL', payload: v})
  },
  getRecipes: recipe => {
    dispatch({type: 'INIT_RECIPES', payload: recipe})
  }

})

const connector = connect (mapStateToProps, mapActionsToProps)

export default connector(Form)
