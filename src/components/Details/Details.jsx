import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';

function Details() {
  const selectedGenre = useSelector((store) => store.genres)
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log('in DETAILS Movie', selectedMovie);
  console.log('in DETAILS GENRE', selectedGenre);
  useEffect(() => {
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
            <p>{selectedGenre.name}</p>
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