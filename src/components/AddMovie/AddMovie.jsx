import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

function AddMovie() {
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(genres);

  let [genre_id, setGenreId] = useState('')
  let [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    description: "",
  });

  const handleTitleChange = (event) => {
    setNewMovie({
      ...newMovie,
      title: event.target.value,
    });
  };

  const handlePosterChange = (event) => {
    setNewMovie({
      ...newMovie,
      poster: event.target.value,
    });
  };

  const handleDescriptionChange = (event) => {
    setNewMovie({
      ...newMovie,
      description: event.target.value,
    });
  };

  const handleGenreChange = (event) => {
    setGenreId({
      ...genre_id,
      genre: event.target.value,
    })
  }

  const navHome = () => {
    history.push("/");
  };

  const addNewMovie = (event) => {
    dispatch({
      type: "ADD_MOVIE",
      payload: { newMovie }
    })
  }

  return (
    <div>
      <p>Add Movie Page</p>

      <form onSubmit={(event) => addNewMovie(event)}>
        <input 
          onChange={handleTitleChange} 
          placeholder="Movie Title" 
          type="text"/>
        <label>Add Movie Title</label>
        <br></br>
        <input 
          onChange={handlePosterChange} 
          placeholder="Movie Poster URL"
          type="text"/>
        <label>Add Movie Poster URL</label>
        <br></br>
        <textarea 
          onChange={handleDescriptionChange} 
          placeholder="Add Movie Description"
          type="text"></textarea>
        <label>Add Movie Description</label>
        <br></br>
        <select value={genre_id} onChange={handleGenreChange}>
          <option disabled value="0">
            Select Genre
          </option>
          {genres.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <label>Select Movie Genre</label>
        <br></br>
        <button type="button" onClick={navHome}>Cancel</button>
        <button type="submit" onClick={addNewMovie}>Save</button>
      </form>
    </div>
  );
}

export default AddMovie;
