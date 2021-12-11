# Checklist

[ ] Home Page
  [ ] Routes
    [ ] /
    [ ] /details
    [ ] /addMovie
  [ ] Add Descriptions

[ ] index.js
  [ ] Sagas
    [x] root saga
    [x] FETCH_MOVIES
    [ ]
  [ ] Reducers
    [x] SET_MOVIES
    [x] SET_GENRES

[ ] App.js
  [ ] Routes
    [x] /
    [ ] /details
    [ ] /addMovie

[ ] MovieList.jsx
  [x] useEffect
  [x] .map
  [ ] onClick img => navigate to details page

[ ] DetailPage.jsx
  [ ] show all details
  [ ] including all genres
  [ ] GET request for specific movie
    [ ] req.params & :id
  [ ] Button: Back to List

[ ] AddMovie.jsx
  [ ]Form
    [ ] Inputs WITH Labels
      [ ] Movie Title
      [ ] Movie Poster URL
      [ ] TEXTAREA - for description
      [ ] Dropdown Menu for genres
    [ ] Buttons
      [ ] Cancel => navigate "/"
      [ ] Save - POST Route

[ ] server.js
  [ ] Routes
    [x] /api/movie
    [x] /api/genre

[ ] genre.router.js
  [ ] router.get('/')

[ ] movie.router.js
  [ ] router.get('/')
  [ ] router.post('/')
    [ ] INSERT INTO "movies"
    [ ] INSERT INTO "movie_genres"

[ ] Stretch Goals Haiku
  [ ] hahahahaha
  [ ] ahahahahahaha
  [ ] hahahahaha