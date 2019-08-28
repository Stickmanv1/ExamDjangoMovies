import React from 'react';
// import FormAddmovie from './Form';
import axios from 'axios';

// const listdata = [];
class MovieTableList extends React.Component {

    state = {
        movieList: [],
        // id: '',
        // name: '',
        // release_year: '',
        // number_in_stock: '',
        // price_rate: '',
        // genre: ''
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/movies/api/')
            .then(res => {
                this.setState({
                    movieList: res.data
                });
                console.log(res.data);
            })
    }
    // axios.get('http://127.0.0.1:8000/movies/api')
    //     .then(res => {
    //         this.setState({
    //             payload: res.data
    //         });
    //         console.log(res.data);
    //     })


    // }



    render() {
        const { movieList } = this.state;

        return (
            <div>
                <h2>Movie List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ReleaseYear</th>
                            <th>Stock</th>
                            <th>PriceRate</th>
                            <th>Genre</th>
                            {/* <th /> */}
                        </tr>
                    </thead>
                    <tbody>
                        {movieList.map(movie => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.name}</td>
                                <td>{movie.release_year}</td>
                                <td>{movie.number_in_stock}</td>
                                <td>{movie.price_rate}</td>
                                <td>{movie.genre}</td>
                            </tr>
                        ))}
                    </tbody>
                    {/* <div class="container" >{ListMovie}</div> */}
                </table>

            </div>

        )

    }
}

export default MovieTableList