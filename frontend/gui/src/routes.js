import React from 'react'
import { Route } from 'react-router-dom'
import AddMovieLists from './components/FormAddMoviesView'
import MovieDetail from './components/FormDetailMoviesView.js'
import MovieTableList from './components/MovieTableList'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={AddMovieLists} />
        <Route exact path='/' component={MovieTableList} />
        <Route exact path='/:movieListID' component={MovieDetail} />
    </div>
)

export default BaseRouter;