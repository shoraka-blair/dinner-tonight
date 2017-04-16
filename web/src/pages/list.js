import React from 'react'
import { connect } from 'react-redux'
import { map, compose } from 'ramda'
import ListItem from '../components/list-item'


const recipeToListItemObj = recipe => ({
    _id: recipe._id,
    title: recipe.title,
    imageUrl: recipe.imageUrl,
    rating: recipe.rating,
    linkUrl: '/recipes/' + recipe._id,
    linkDescription: 'View Recipe'
  })

  const li = li => <ListItem key={li.id} {...li} />




//map(li, recipeToListItemObj(props.recipes))

class RecipeList extends React.Component {
    componentDidMount() {
      fetch(`http://localhost:8082/recipes`)
        .then(res => res.json())
        .then(recipes => this.props.setRecipes(recipes))
      }

  render() {
    const props = this.props

  return (
    <div>
      <ul className="list">
        {
          compose(
            map(li),
            map(recipeToListItemObj)
          )(props.recipes)
        }
      </ul>
    </div>
  )
}
}





const mapStateToProps = (state) => (state)

const mapActionsToProps = (dispatch) => {
  return {

  setRecipes: recipes => {
    dispatch ({
      type: 'SET_RECIPES', payload: recipes
    })
  }
}
}



const connector = connect(mapStateToProps, mapActionsToProps)


export default connector(RecipeList)
