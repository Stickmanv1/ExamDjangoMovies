import React from 'react';
// import FormAddmovie from './Form';
import axios from 'axios';
// const listdata = [];
class MovieDetail extends React.Component {

    state = {
        movieList: {},
    }

    componentDidMount() {
        const movieListID = this.props.match.params.movieListID
        axios.get(`http://127.0.0.1:8000/movies/api/${movieListID}`)
            .then(res => {
                this.setState({
                    movieList: res.data
                });
                // console.log(res.data);
            })
    }




    render() {
        // const { movieList } = this.state;

        return (

            <div className="card">
                <h5 class="card-title">{this.state.movieList.name}</h5>
                {/* <label >{this.state.movieList.name}</label> */}
                <div class="card-body">
                    <p>Release Year: {this.state.movieList.release_year}</p>
                    <p>Unit Stock: {this.state.movieList.number_in_stock}</p>
                    <p>Price Rate: {this.state.movieList.price_rate}</p>
                    <p>Genre: {this.state.movieList.genre}</p>
                </div>

            </div >

        )

    }
}

export default MovieDetail;