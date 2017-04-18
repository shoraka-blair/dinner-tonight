import React from 'react'
import { connect } from 'react-redux'
import CatControl from '../components/cat-control'
import CuisineControl from '../components/cuisine'
import ListItem from '../components/list-item'

import {
  map,
  filter,
  compose,
  contains,
  equals,
  intersection,
  allPass,
  mean
} from 'ramda'




class Form extends React.Component {

    componentDidMount() {
        console.log('about to fetch')
          fetch(`http://localhost:8082/recipes`)
            .then(res => res.json())
      //      .then(res => filter(x => x.persons > 0, res))
            .then(recipes => this.props.setRecipes(recipes))
        }

  render() {

    const recipeToListItemObj = recipe => ({
      _id: recipe._id,
      title: recipe.title,
      imageUrl: recipe.imageUrl,
      rating:  mean(recipe.rating).toFixed(1),
      linkUrl: '/recipes/' + recipe._id,
      linkDescription: 'View Recipe'
    })

    const li = li => <ListItem key={li._id} {...li} />

    const props = this.props

    const recipes = compose(
        map(recipeToListItemObj),
        filter(r => r.cuisine === props.cuisineControl),
        filter(
            r =>
            intersection(r.categories, props.control).length === props.control.length)
          )(props.recipes)


  return (
    <div className='pw4 ph1 mw6-ns center-ns'>
      {true && (
      <div>
        <h2 className='red'>STEP 1</h2>
        <CatControl value={props.control} onChange={props.changeCat} />
        <h2 className='red'>STEP 2</h2>
        <CuisineControl
          value={props.cuisineControl}
          onChange={props.changeCuisine}
        />
      </div>
          )}

      {true && (
      <div>
      <h2 className='red'>SELECTED RECIPES:</h2>
        <ul className='list'>
          {map(li, recipes)}
        </ul>
      </div>
          )}
    </div>
  )
}
}


const mapStateToProps = (state) => {
  return state
}
const mapActionsToProps = (dispatch) => {
  return {
  changeCat: v => {
    dispatch({ type: 'SET_CONTROL', payload: v })
  },
  changeCuisine: v => {
    dispatch({ type: 'SET_CUISINE_CONTROL', payload: v })
  },

  setRecipes: recipes => {
    dispatch ({
      type: 'SET_RECIPES', payload: recipes
    })
  }
}
  /*getRecipes: recipe => {
    dispatch({type: 'INIT_RECIPES', payload: recipe})
  }*/

  // getRecipes: recipe => {
    // dispatch({ type: 'INIT_RECIPES', payload: recipe })
  // }
 }

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Form)
