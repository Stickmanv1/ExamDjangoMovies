import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovie } from '../actions/movies';


export class Form extends Component {
    state = {
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
        const { id, name, release_year, number_in_stock, price_rate, genre } = this.state;
        const movie = { id, name, release_year, number_in_stock, price_rate, genre };
        this.props.addMovie(movie);
    }
    render() {
        const { id, name, release_year, number_in_stock, price_rate, genre } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Movies</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id</label>
                        <input
                            className="form-control"
                            type="number"
                            name="id"
                            onChange={this.onChange}
                            value={id}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>ReleaseYear</label>
                        <input
                            className="form-control"
                            type="number"
                            name="release_year"
                            onChange={this.onChange}
                            value={release_year}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input
                            className="form-control"
                            type="number"
                            name="number_in_stock"
                            onChange={this.onChange}
                            value={number_in_stock}
                        />
                    </div>
                    <div className="form-group">
                        <label>PriceRate</label>
                        <input
                            className="form-control"
                            type="number"
                            name="price_rate"
                            onChange={this.onChange}
                            value={price_rate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input
                            className="form-control"
                            type="number"
                            name="genre"
                            onChange={this.onChange}
                            value={genre}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addMovie })(Form);
