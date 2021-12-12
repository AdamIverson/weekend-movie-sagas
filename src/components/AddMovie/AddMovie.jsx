import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function AddMovie() {
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log('in ADD MOVIE', genres);

  useEffect(() => {
    dispatch({ type: "FETCH_ID"});
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  let [newTitle, setNewTitle] = useState('');
  let [newGenre, setNewGenre] = useState('');
  let [newPoster, setNewPoster] = useState('');
  let [newDescription, setNewDescription] = useState('');

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handlePosterChange = (event) => {
    setNewPoster(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleGenreChange = (event) => {
    setNewGenre(event.target.value)
  }

  const navHome = () => {
    history.push("/");
  };

  const addNewMovie = (event) => {
    console.log('addNewMovie click');
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        title: newTitle,
        poster: newPoster,
        description: newDescription,
        genre: newGenre
      }
    });
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
        <select value={newGenre.id} onChange={handleGenreChange}>
          <option disabled value="0">
            Select Genre
          </option>
          {genres.map((genre) => {
            return (
              <option key={genre.id} value={genre.name}>
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
