import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies, deleteMovies } from '../actions/movies';
// import movies from '../../reducers/movies';
export class Movies extends Component {

    static propTypes = {
        movies: PropTypes.array.isRequired,
        getMovies: PropTypes.func.isRequired,
        deleteMovies: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getMovies();
    }


    render() {
        return (
            <Fragment>
                <h2>Movie List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ReleaseYear</th>
                            <th>Stock</th>
                            <th>PriceRate</th>

                            {/* <th>Genre</th> */}
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map(movie => (

                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.name}</td>
                                <td>{movie.release_year}</td>
                                <td>{movie.number_in_stock}</td>
                                <td>{movie.price_rate}</td>
                                {/* <td>{movie.genre}</td> */}

                                <td><button onClick={this.props.deleteMovies.bind(this, movie.id)}
                                    className="ben ben-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
});

export default connect(mapStateToProps, { getMovies, deleteMovies })(Movies);