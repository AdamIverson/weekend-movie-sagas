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
  [x] show all details
  [ ] including all genres
  [x] GET request for specific movie
    [x] req.params & :id
  [x] Button: Back to List

[ ] AddMovie.jsx
  [ ]Form
    [x] Inputs WITH Labels
      [x] Movie Title
      [x] Movie Poster URL
      [x] TEXTAREA - for description
      [x] Dropdown Menu for genres
    [ ] Buttons
      [x] Cancel => navigate "/"
      [x] Save
        [x] POST Route
    [ ] Wire Inputs

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
  [ ] the haiku lived here
  [ ] it no longer amused me
  [ ] so i changed it pal

  [ ] Saturday night sign off
    [ ] Form needs Genres to register on submission
      [ ] Submission probably doesn't entirely work yet
      [ ] It's certainly not hitting the db
    [ ] Details is not displaying Genres
      [ ] where does that work get done
      [ ] i want to do it here in a function
      [ ] they probably wanted in done in a join table
      [ ] i'd really rather do it here in a function
      [ ] i have the movie id and the entire genre list
      [ ] quickest way out of here might be piping in the movies_genres table and just chopping it up in a function
      [ ] anything to avoid sql folks
      [ ] i don't even mind sql
      [ ] it's honestly so pleasant with its simplicity and absolutely unforgiving syntax
      [ ] bedtime

  [ ] Sunday morning
    [ ] I slept on it
    [ ] Genres on the Details page should come from a table JOIN on the GET request
    [ ] Adding Genre on the Form is probably an issue with identifying nested objects