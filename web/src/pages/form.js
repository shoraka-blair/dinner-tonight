import React from 'react'
import { connect } from 'react-redux'
import CatControl from '../components/cat-control'
import CuisineControl from '../components/cuisine'
import ListItem from '../components/list-item'

import { map, filter, compose, contains } from 'ramda'



const Form = (props) => {
console.log("picked!", props)
console.log("do i have the recipes?", props.control)

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
  return (
    recipe.recipeNumber==="7"

)}


  return (
    <div className="pa4">
      <h3>Select Categories:  {props.control}</h3>
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
      <h3>you chose:{props.control}</h3>
      <h3>{props.cuisineControl}</h3>
      <h3>here are your recipes:</h3>
      <ul className="list">
        {
          compose(
            map(li),
            map(recipeToListItemObj),
            filter(selectedRecipes)
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
    dispatch({type: 'SET_CUISINE_CONTROL', payload: 'american'})
  },
  getRecipes: recipe => {
    dispatch({type: 'INIT_RECIPES', payload: recipe})
  }

})

const connector = connect (mapStateToProps, mapActionsToProps)

export default connector(Form)
