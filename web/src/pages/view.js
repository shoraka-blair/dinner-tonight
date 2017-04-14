import React from 'react'
  import { connect } from 'react-redux'
import { map, find, propEq, compose, pathOr } from 'ramda'
import Card from '../components/card'
import Comment from '../components/comment'
import TextField from '../components/text-field'
import BasicButton from '../components/basic-button'
import fetch from 'isomorphic-fetch'


const putRecipe = (recipe) => fetch('http://localhost:8082/recipes/' + recipe._id, {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'put',
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

      const li = (ingredient) => <li key={li._id}>{ingredient}</li>
      // const commentToObject = comment => ({
      //   date: comment.date,
      //   name: comment.author.name,
      //   text: comment.text
      // })

console.log('this is the recipe!!!', props)
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

          <h4>Reviews</h4>
          <ul>
          {map((comment) =>
                <li className="flex items-center lh-copy ph0-l bb b--black-10">
                <Comment
                date={comment.date}
                text={comment.text}
                name={comment.author.name}
                imageUrl={comment.author.avatarUrl} /></li>, props.recipe.comments)
            }
          </ul>
          <div>
            <h2>Write Review</h2>
            <form onSubmit={this.props.submit(props.history, props.recipe)}>
              <TextField
                label="Name"
                onChange={this.props.changeName}
                optional={false}
              />
              <BasicButton
                backgroundColor="light-orange"
                color="white-80"
              >Post Review</BasicButton>
              <a className="link" href="#" onClick={e => props.history.goBack() }>Cancel</a>
            </form>
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
  changeName: (e) => dispatch({ type: 'SET_RECIPE_NAME', payload: e.target.value }),
  submit: (history, recipe) => (e) => {
      e.preventDefault()
        // update or putWidget
        putRecipe(recipe)
          .then(res => res.json()).then(res => {
            // clear our widget memory from store
            dispatch({ type: 'CLEAR_RECIPE'})
            // navigate to a list view
            history.push('/recipes/')
          }).catch(err => console.log(err.message))
      }
}



}



const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ViewRecipe)
