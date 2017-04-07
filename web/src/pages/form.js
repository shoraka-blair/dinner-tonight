import React from 'react'
import { connect } from 'react-redux'
import CatControl from '../components/cat-control'
import CuisineControl from '../components/cuisine'
import { map } from 'ramda'



const Form = (props) => {

//    const li = <li>{props.recipe.title}</li>
    // const newRecipe = map(x => ({
    //     title: x.recipe.title,
    //     image: x.recipe.image,
    //     ingredients: x.recipe.ingredients
    //   }), recipes))




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
    <section>
    <h3>Select Main Ingredient:  </h3>
    </section>
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
