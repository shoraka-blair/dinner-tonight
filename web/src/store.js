import {createStore, combineReducers } from 'redux'
import { set, lensProp, insert } from 'ramda'

// const {
    // map
// } = require('ramda')


//
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// }




// const newRecipe = map(x => ({
//     title: x.recipe.title,
//     image: x.recipe.image,
//     ingredients: x.recipe.ingredients
//   }), recipes)


// const patientToListItemObj = map(patient => ({
//     _id: patient._id,
//     title: patient.name.first + ' ' + patient.name.last,
//     image: patient.avatar,
//     sub: moment(patient.birthDate).fromNow(true) + ' old',
//     linkUrl: '/patients/' + patient._id,
//     linkDescription: 'View Patient'
//   })
//)
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



const recipes = (state= [], action) => {
  console.log("XXXXX",action.payload)
      switch(action.type) {
        case 'SET_RECIPES':
        console.log("XX",action.payload)
          return action.payload
        default:
          return state
      }
    }

const recipe = (state=initialRecipeState, action) => {
  switch (action.type) {
    case 'SET_RECIPE':
    console.log('*****', action.payload)
      return action.payload
    case 'SET_RECIPE_NAME':
      return set(lensProp('name'), action.payload, state)
    case 'CLEAR_RECIPE':
      return {}
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
    control: control,
    cuisineControl: cuisineControl
  })
)


export default store
