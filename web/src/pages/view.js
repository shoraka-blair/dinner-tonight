import React from 'react'
  import { connect } from 'react-redux'
import { map, find, propEq } from 'ramda'
import Card from '../components/card'

const li = (ingredient) => <li>{ingredient}</li>

const ViewRecipe = (props) => {
  console.log("props", props)
    const recipe = find(propEq('_id', props.match.params.id), props.recipes)
    return (
      <div>
        <Card
          imageUrl={recipe.imageUrl}
          title={recipe.title}
          rating={recipe.rating} />
        <div>
          <h3>Ingredients</h3>
          <ul>
            {map(li, recipe.ingredients)}
          </ul>
        </div>
        <div>
          <h3>Directions</h3>
          <ul>
            {map(li, recipe.directions)}
          </ul>
        </div>
      </div>
    )
  }

const connector = connect(state => state)

export default connector(ViewRecipe)
