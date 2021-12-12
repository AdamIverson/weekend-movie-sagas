import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";

function Details() {
  const selectedGenre = useSelector((store) => store.genres);
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const history = useHistory();
  const dispatch = useDispatch();


  console.log("in DETAILS Movie", selectedMovie);
  console.log("in DETAILS GENRE SELECTED GENRE", selectedGenre);
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  const navigateHome = () => {
    history.push("/");
  };

  function isolateIdGenre() {
    console.log("in ISOLATED ID GENRE");

    for (let genre of selectedGenre) {
      if (genre.id === selectedMovie.genre_id) return (<p>{genre.name}</p>);
    }
    return;
  };

  return (
    <section>
      <p>Details Page</p>

      {/* <p>{selectedMovie.title}</p> */}
      {selectedMovie.title ? (
        <>
          <h2>{selectedMovie.title}</h2>
          <img src={selectedMovie.poster} />
          <p>{selectedMovie.description}</p>
          {selectedGenre.map((movie) => {
            return (
              <div key={movie.id}>
                <p>{movie.name}</p>
              </div>
            )
          })}
        </>
      ) : (
        <p>No Movie Selected</p>
      )}
      <button onClick={navigateHome}>Back To List</button>
    </section>
  );
}

export default Details;
