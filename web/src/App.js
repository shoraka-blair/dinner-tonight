import React, { Component } from 'react';
import Form from './pages/form'
import RecipeList from './pages/list'
import ViewRecipe from './pages/view'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="pa4">
        <header className="tc pa3 bg-light-blue white pa2 p">
        <h1>Whats For Dinner?</h1>
        </header>
        <nav className="pa2">
          <Link to="/">Home  </Link>
          |
          <Link to="/recipes">  Browse Recipes</Link>
        </nav>
        <Route exact path="/" component={Form} />
        <Switch>
        <Route path="/recipes/:id" component={ViewRecipe} />
        <Route path="/recipes" component={RecipeList} />
        </Switch>
      </div>
    </BrowserRouter>
        )
  }
}

export default App;
