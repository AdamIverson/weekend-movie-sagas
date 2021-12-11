import { useHistory } from 'react-router-dom'

function AddMovie() {

  const history = useHistory();

  const navHome = () => {
    history.push('/');
  }

  const submitMovie = () => {
    console.log('Save Click');
    return;
  }

  return (
    <div>
      <p>Add Movie Page</p>

        <form>
          <input placeholder="Movie Title" />
          <label>Add Movie Title</label>
          <br></br>
          <input placeholder="Movie Poster URL" />
          <label>Add Movie Poster URL</label>
          <br></br>
          <textarea placeholder="Add Movie Description"></textarea>
          <label>Add Movie Description</label>
          <br></br>
          <select>
            <option disabled value='0'>
              Select Genre
            </option>
          </select>
          <label>Select Movie Genre</label>
          <br></br>
          <button onClick={navHome}>Cancel</button>
          <button onClick={submitMovie}>Save</button>
        </form>
    </div>
  )
};

export default AddMovie;