import {createStore, combineReducers } from 'redux'
import { set, lensProp, insert, append, pathOr } from 'ramda'



const initialRecipeState = {

  _id: '',
  categories: [],
  comments: [],
  cuisine: '',
  directions: [],
  imageUrl: '',
  ingredients: [],
  mainIngredient: '',
  rating: '',
  title: '',
  type: ''
  }

const initialCommentState = {
      "name": '',
      "text": ''
}

const initialRatingState = {"rating": 0}


const recipes = (state= [], action) => {
      switch(action.type) {
        case 'SET_RECIPES':
          return action.payload
        default:
          return state
      }
    }

const recipe = (state=initialRecipeState, action) => {
  switch (action.type) {
    case 'SET_RECIPE':
      return action.payload
    case 'CLEAR_RECIPE':
      return {}
    default:
    return state
  }
}

const comment = (state=initialCommentState, action) => {
  switch (action.type) {
    case 'SET_COMMENT_NAME':
      return set(lensProp('name'), action.payload, state)
    case 'SET_COMMENT_TEXT':
      return set(lensProp('text'), action.payload, state)
    case 'CLEAR_COMMENT_NAME':
      return ''
    case 'CLEAR_COMMENT_TEXT':
      return ''
    case 'CLEAR_COMMENT':
      return {}
    default:
    return state
  }
}

const rating = (state=initialRatingState, action) => {
  switch (action.type) {
    case 'SET_RATING':
      return (action.payload)
    default:
      return state
  }
}


const control = (state=[], action) => {
    switch(action.type) {
        case 'SET_CONTROL':
          return action.payload
        default:
          return state
    }
}


const cuisineControl = (state='', action) => {
      switch(action.type) {
        case 'SET_CUISINE_CONTROL':
          return action.payload
        default:
          return state
      }
    }
const store = createStore(
  combineReducers({
    recipes: recipes,
    recipe: recipe,
    comment: comment,
    rating: rating,
    control: control,
    cuisineControl: cuisineControl
  })
)


export default store
