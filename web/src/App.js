import React, { Component } from 'react'
import Form from './pages/form'
import RecipeList from './pages/list'
import ViewRecipe from './pages/view'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <header
            className='athelas tc white'
            style={{ background: 'url(/images/dinner.jpg)' }}
          >
            <div className='w-100 h-100 bg-black-40 pv2'>
              <div className='cf'>
                <nav className='fr mt3 mr3 mr1-ns mt4-ns'>
                  <Link
                    to='/'
                    className='bg-white-90 orange b--white-80 ba br2 pa2 link mr2 pointer w-100'
                  >
                    Search
                  </Link>
                  <Link
                    to='/recipes'
                    className='bg-white-90 orange b--white-80 ba br2 pa2 link mr2 pointer w-100'
                  >
                    Browse
                  </Link>
                </nav>
                <h1 className='f4 f2-ns'>Dinner Tonight?!</h1>
                <div className='sans-serif dn db-ns f4-ns'>
                  Use the search function to quickly find a dinner the whole family can enjoy!
                </div>
              </div>
            </div>
          </header>
          <main className='pa4'>
            <Route exact path='/' component={Form} />
            <Switch>
              <Route path='/recipes/:id' component={ViewRecipe} />
              <Route path='/recipes' component={RecipeList} />
              {}
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
