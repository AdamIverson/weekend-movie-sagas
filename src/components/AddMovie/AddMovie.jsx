import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function AddMovie() {
  // useSelector to shake hands with the genres Saga to get genres data
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log('in ADD MOVIE', genres);

  // populate that drop down menu with genre options
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  // separate state for each input value
  let [newTitle, setNewTitle] = useState("");
  let [newGenre, setNewGenre] = useState("");
  let [newPoster, setNewPoster] = useState("");
  let [newDescription, setNewDescription] = useState("");

  // handler functions for each input value
  const handleTitleChange = (event) => {
    // set state
    setNewTitle(event.target.value);
  };

  const handlePosterChange = (event) => {
    setNewPoster(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleGenreChange = (event) => {
    setNewGenre(event.target.value);
  };

  // navigation route home from cancel button
  const navHome = () => {
    history.push("/");
  };

  // clickhandler for add movie button
  // event means it's attached to action

  const addNewMovie = (event) => {
    console.log("addNewMovie click");
    event.preventDefault();
    // the button has been clicked
    // send this data as an object with the state set to entered input values

    dispatch({
      type: "ADD_MOVIE",
      payload: {
        title: newTitle,
        poster: newPoster,
        description: newDescription,
        genre: newGenre,
      },
    });
  };

  // render that AddMovie form
  // <labels> are for screen readers to aid navigation
  return (
    <div>
      <p>Add Movie Page</p>

      <form onSubmit={(event) => addNewMovie(event)}>
        <input
          value={newTitle}
          onChange={handleTitleChange}
          placeholder="Movie Title"
          type="text"
          required
        />
        <label>Add Movie Title</label>
        <br></br>
        <input
          value={newPoster}
          onChange={handlePosterChange}
          placeholder="Movie Poster URL"
          type="text"
        />
        <label>Add Movie Poster URL</label>
        <br></br>
        <textarea
          value={newDescription}
          onChange={handleDescriptionChange}
          placeholder="Add Movie Description"
          type="text"
        ></textarea>
        <label>Add Movie Description</label>
        <br></br>
        <select value={newGenre.id} onChange={handleGenreChange}>
          <option>Select Genre</option>
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
        <button type="button" onClick={navHome}>
          Cancel
        </button>
        <button type="submit" onClick={addNewMovie}>
          Save
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
