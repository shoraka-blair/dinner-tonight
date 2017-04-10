import {createStore, combineReducers } from 'redux'


// const {
    // map
// } = require('ramda')

const recipeDocuments = [
{
"_id": "recipe_pulled_pork_5",
"title": "Pulled Pork",
"recipeNumber": "5",
"imageUrl": "https://www.edamam.com/web-img/0cf/0cfba91f9de02d26123a236c60f03897.jpg",
"mainIngredient": "Pork",
"categories": [
  "comfort",
  "fast"
],
"cuisine": "american",
"ingredients": [
"1 (5 to 7-pound) boston pork butt, bone in",
"3/4 cup seasoning rub (recommended: butch's smack your lips magic dust"
],
"directions": [
  "make pork"
],
"rating": 79,
"comments": [
{
  "date": "",
  "text": "Awesome!",
  "author": {
    "name": 'Jenn',
    "avatarUrl": 'http://placekitten.com/g/64/64'
  }
},
{
  "date": "",
  "text": "great!",
  "author": {
    "name": 'Lisa',
    "avatarUrl": 'http://placekitten.com/g/64/64'
  }
}
],
"type": "recipe"
},
{
  "_id": "recipe_pork_burgers_with_herby_chips_6",
"title": "Pork Burgers With Herby Chips",
"recipeNumber": "6",
"imageUrl": "https://www.edamam.com/web-img/d60/d608459a0e23125c50d0c5b234e04d12.jpg",
"mainIngredient": "Pork",
"categories": [
  "comfort"
],
"cuisine": "american",
"ingredients": [
"3 large baking potatoes , cut into wedges",
"Burger buns , lettuce and onion, to serve",
"1 red pepper , deseeded, cut into quarters",
"1 large egg",
"1.0 tbsp vegetable oil , plus 1 tsp extra",
"500.0g pack pork mince",
"2.0 tsp smoked paprika (see tip)",
"4.0 tbsp mayonnaise",
"3 garlic cloves , crushed",
"2.0 tsp dried mixed herbs"
],
"directions": [
  "make pork"
],
"rating": 95,
"comments": [
{
  "date": "",
  "text": 'I hope you enjoy!',
  "author": {
    "name": 'john',
    "avatarUrl": 'http://placekitten.com/g/64/64'
  }
}
],
"type": "recipe"
},
{
"_id": "recipe_pork_cutlets_with_couscous_7",
"title": "Pork Cutlets with Couscous and Sauteed Peppers and Asparagus",
"recipeNumber": "7",
"imageUrl": "https://www.edamam.com/web-img/619/619e9b68d4155d6873b38da1dcea630b.jpg",
"mainIngredient": "Pork",
"categories": [
  "budget"
],
"cuisine": "italian",
"ingredients": [
"1 cup couscous",
"2 tablespoons extra-virgin olive oil",
"2 red bell peppers, seeded and cut into 1-inch strips",
"1 bunch asparagus (about 1 pound), trimmed",
"Coarse salt and ground pepper",
"8 small pork cutlets (about 1 1/2 pounds total)",
"1/2 cup loosely packed fresh parsley leaves, coarsely chopped"
],
"directions": [
  "make pork"
],
"rating": 90,
"comments": [
{
  "date": "",
  "text": 'so good!',
  "author": {
    "name": 'ginger',
    "avatarUrl": 'http://placekitten.com/g/64/64'
  }
}
],
"type": "recipe"
}
]

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




const recipes = (state= recipeDocuments, action) => {
      switch(action.type) {
        case 'SET_RECIPES':
          return action.payload
        default:
          return state
      }
    }
const recipe = function (recipe={}, action) {
  switch (action.type) {
    case "SET_RECIPE":
    return action.payload
    default:
    return recipe
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
    recipes,
    recipe,
    control,
    cuisineControl
  })
)

export default store
