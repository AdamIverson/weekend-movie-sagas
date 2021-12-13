import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";

function Details() {
  // very much just trying to bring in all data at this point
  const selectedGenre = useSelector((store) => store.genres);
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const history = useHistory();
  const dispatch = useDispatch();

  // beginning photographers also have an affinity for "spray and pray"
  console.log("in DETAILS Movie", selectedMovie);
  console.log("in DETAILS GENRE SELECTED GENRE", selectedGenre);
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
    dispatch({ type: "FETCH_ID" });
  }, []);

  // navigation buttons are my love language
  const navigateHome = () => {
    history.push("/");
  };

  // I recognize the horrible inefficiency of sorting data in the client
  // this assignment very much had the feel of running an ultramarathon
  // some where between 60-80% completion, the wheels fall off and you try things
  // I tried some things
  // I'll clean it up in post i swear

  function isolateIdGenre() {
    console.log("in ISOLATED ID GENRE");
    // wouldn't it just be nice to match the genres with the movie and do some styling?
    for (let genre of selectedGenre) {
      if (genre.id === selectedMovie.genre_id) return <p>{genre.name}</p>;
    }
    return;
  }

  // getting the names right can be a real crapshoot
  return (
    <section>
      <p>Details Page</p>

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
            );
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
