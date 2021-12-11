import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';

function Details() {
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log('in DETAILS', selectedMovie);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    // dispatch({ type: 'FETCH_GENRE'})
  });

  const navigateHome = () => {
    history.push("/")
  }

  return (
    <section>
      <p>Details Page</p>

      {/* <p>{selectedMovie.title}</p> */}
      {
        selectedMovie.title ? (
          <>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.poster} />
            <p>{selectedMovie.description}</p>
          </>
        ) : (
          <p>No Movie Selected</p>
        )
      }
      <button onClick={navigateHome}>Back To List</button>
    </section>
  ) 
};

export default Details;