import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleSelectMovie = (movie) => {
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie});
        history.push(`/details?id=${movie.id}`);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => handleSelectMovie(movie)} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <p>{movie.description}</p>
                            
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;