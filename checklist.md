# Checklist

[ ] Home Page
  [ ] Routes
    [x] /
    [x] /details
    [x] /addMovie
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
    [x] /details
    [x] /addMovie

[ ] MovieList.jsx
  [x] useEffect
  [x] .map
  [ ] onClick of IMAGE => navigate to details page
      [ ] this is going to take some req.params/:id magic
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

[ ] Stretch Goals: A Haiku
  [ ] hahahahaha
  [ ] ahahahahahaha
  [ ] hahahahaha