import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const history = useHistory();
  const dispatch = useDispatch();

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
      {
        selectedMovie.name ? (
          <>
            <h2>{selectedMovie.name}</h2>
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