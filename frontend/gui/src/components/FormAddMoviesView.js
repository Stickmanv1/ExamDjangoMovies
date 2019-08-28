import React from 'react';
// import FormAddmovie from './Form';
import axios from 'axios';
import PropTypes from 'prop-types';

// const listdata = [];
// export const ADD_MOVIES = 'ADD_MOVIES';
// export const addMovie = (movie) => dispatch => {
//     axios.post('http://127.0.0.1:8000/movies/api/', movie)
//         .then(res => {
//             dispatch({
//                 type: ADD_MOVIES,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err));
// };
class AddMovieLists extends React.Component {

    state = {
        // movieList: [],
        id: '',
        name: '',
        release_year: '',
        number_in_stock: '',
        price_rate: '',
        genre: ''
    }

    static propTypes = {
        addMovie: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]:
            e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const movie = {
            id: '',
            name: this.state.name,
            release_year: this.state.release_year,
            number_in_stock: this.state.number_in_stock,
            price_rate: this.state.price_rate,
            genre: this.state.genre
        }

        axios.post('http://127.0.0.1:8000/movies/api/', movie)
            .then(res => {
                console.log(res.data);
            })
        // const { id, name, release_year, number_in_stock, price_rate, genre } = this.state;
        // const movie = { id, name, release_year, number_in_stock, price_rate, genre };
        // this.props.children.addMovie(movie);

    }

    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/movies/api/')
    //         .then(res => {
    //             this.setState({
    //                 movieList: res.data
    //             });
    //             console.log(res.data);
    //         })
    // }
    // axios.get('http://127.0.0.1:8000/movies/api')
    //     .then(res => {
    //         this.setState({
    //             payload: res.data
    //         });
    //         console.log(res.data);
    //     })


    // }



    render() {
        // const { movieList } = this.state;
        // const ListMovie = movieList.length ? (
        //     movieList.map(movie => {
        //         return (
        //             <div classname="Genre" key={movie.id}>
        //                 <span className="GenreTitle">{movie.name}</span>
        //                 <p></p>
        //             </div>
        //         )
        //     })
        // ) : (
        //         <div className="center">no movies yet</div>
        //     );
        const { name, release_year, number_in_stock, price_rate, genre } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <div className="form-group">
                        <label >Enter Movie Detail</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                            placeholder="Enter Movie Name"
                        />
                    </div>

                    <div className="form-group">
                        {/* <label for="exampleFormControlInput1">Enter Release Year</label> */}
                        <input
                            className="form-control"
                            type="number"
                            name="release_year"
                            onChange={this.onChange}
                            value={release_year}
                            placeholder="Enter Release Year">
                        </input>
                    </div>

                    <div className="form-group">
                        {/* <label for="exampleFormControlInput1">Enter Unit Stock</label> */}
                        <input type="number"
                            className="form-control"
                            name="number_in_stock"
                            onChange={this.onChange}
                            value={number_in_stock}
                            placeholder="Enter Unit Stock">
                        </input>
                    </div>

                    <div className="form-group">
                        {/* <label for="exampleFormControlInput1">Enter Price Rate</label> */}
                        <input type="number"
                            className="form-control"
                            name="price_rate"
                            onChange={this.onChange}
                            value={price_rate}
                            placeholder="Enter Price Ratee">
                        </input>
                    </div>
                    <div className="form-group">
                        {/* <label for="exampleFormControlInput1">Enter Price Rate</label> */}
                        <input type="number"
                            className="form-control"
                            name="genre"
                            onChange={this.onChange}
                            value={genre}
                            placeholder="Enter Genre">
                        </input>
                    </div>

                    <div className="form-group">
                        {/* <label for="exampleFormControlSelect1"> select Genre</label>
                        <select
                            className="form-control"
                            name="genre"
                            onChange={this.onChange}
                            value={genre}
                        >
                            
                            <option >1.Action</option>
                            <option >2.Comedy</option>
                            <option >3.Drama</option>
                            <option >4.Horror</option>
                            <option >5.Romance</option>
                        </select> */}
                        <br></br>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Submit
                </button>
                        </div>
                        <br></br>
                    </div>


                </div>
                {/* // <FormAddmovie data={this.state.movieList.name} />
            // <ul>
            //     {this.state.movieList.map(movieList => <li>{movieList.genre}</li>)}
            // </ul> */}
            </form>
        )

    }
}

export default (AddMovieLists);