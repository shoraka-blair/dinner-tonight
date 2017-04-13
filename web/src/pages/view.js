import React from 'react'
  import { connect } from 'react-redux'
import { map, find, propEq, compose } from 'ramda'
import Card from '../components/card'
import Comment from '../components/comment'

const li = (ingredient) => <li key={li._id}>{ingredient}</li>
const comm = (comment) => <Comment key={comment._id} {...comm} />
// const commentToObject = comment => ({
//   date: comment.date,
//   name: comment.author.name,
//   text: comment.text
// })

const ViewRecipe = (props) => {
  const recipe = find(propEq('_id', props.match.params.id), props.recipes)
  console.log("XXXXXX", recipe.comments)



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
          <hr />

          <h4>Reviews</h4>
          <ul>
          {map((comment) =>
                <li className="flex items-center lh-copy ph0-l bb b--black-10">
                <Comment
                date={comment.date}
                text={comment.text}
                name={comment.author.name}
                imageUrl={comment.author.avatarUrl} /></li>, recipe.comments)
            }
          </ul>
          <a class="see-all" href="/recipes/comments">Write Review</a>

        </div>
      )
    }



const connector = connect(state => state)

export default connector(ViewRecipe)
