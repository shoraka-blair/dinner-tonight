import React from 'react'
  import { connect } from 'react-redux'
import { map, find, propEq, compose, pathOr, append, insert, push } from 'ramda'
import Card from '../components/card'
import Comment from '../components/comment'
import TextField from '../components/text-field'
import BasicButton from '../components/basic-button'
import fetch from 'isomorphic-fetch'


const putRecipe = (recipe) => fetch('http://localhost:8082/recipes/' + recipe._id, {
  headers: {
    'Content-Type': 'application/json'},
  method: 'PUT',
  body: JSON.stringify(recipe)
})

class ViewRecipe extends React.Component {

    componentDidMount() {
      console.log('about to fetch')

      fetch(`http://localhost:8082/recipes/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(recipe => this.props.setRecipe(recipe))
  }


    render() {
      const props = this.props

      const li = (x) => <li key={x.id}>{x}</li>

      return (
        <div>
          <Card
            imageUrl={props.recipe.imageUrl}
            title={props.recipe.title}
            rating={props.recipe.rating} />
          <div>
            <h3>Ingredients</h3>
            <ul>
              {map(li, props.recipe.ingredients)}
            </ul>
          </div>
          <div>
            <h3>Directions</h3>
            <ul>
              {map(li, props.recipe.directions)}
            </ul>
          </div>
          <hr />

          <h3>Reviews</h3>
          <ul>
          {map((comment) =>
                <li className="flex items-center lh-copy ph0-l bb b--black-10">
                <Comment
                text={comment.text}
                name={comment.name}
                /></li>, props.recipe.comments)
            }
          </ul>
          <div>
            <h2>Write Review | Rate Recipe</h2>
              <TextField
                label="Name"
                type="text"
                onChange={props.changeName}
                optional={false}
              />
              <TextField
                label="Review"
                type="text"
                onChange={props.changeComment}
                optional={false}
              />
              <TextField
                label="Rating"
                type="number"
                onChange={props.changeRating}
                help="Please rate recipe 1-5"
                optional={false}
              />

              <BasicButton
                backgroundColor="light-silver"
                color="white-80"
                onClick={props.submit(props.comment, props.recipe, props.rating, props.history)}
              >Post Review</BasicButton>
              <a className="link" href="#" onClick={e => props.history.goBack() }>Cancel</a>
          </div>

        </div>
      )
    }
}
const mapStateToProps = (state) => {
  return state
}

const mapActionsToProps = (dispatch) => {
  return {
  setRecipe: recipe => {
    dispatch ({
      type: 'SET_RECIPE', payload: recipe
    })
  },
  changeName: (e) => {
    dispatch({ type: 'SET_COMMENT_NAME', payload: e.target.value })
  },
  changeComment: (e) => {
    dispatch({ type: 'SET_COMMENT_TEXT', payload: e.target.value })
  },
  changeRating: (e) => {
    dispatch({ type: 'SET_RATING', payload: e.target.value })
  },
  submit: (comment, recipe, rating, history) => (e) => {
      e.preventDefault()
        recipe.comments = append(comment, recipe.comments)
        recipe.rating = append(Number(rating), recipe.rating)
        putRecipe(recipe)
          .then(res => res.json()).then(res => {
            // clear our widget memory from store
            dispatch({ type: 'CLEAR_COMMENT_NAME'})
            dispatch({ type: 'CLEAR_COMMENT_TEXT'})
            // navigate to a list view
            history.push('/recipes/'+recipe._id)
          })
      }
}

}



const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ViewRecipe)
