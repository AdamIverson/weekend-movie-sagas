import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, take } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchAllGenres);
  // yield takeEvery("FETCH_ID", fetchId)
  yield takeEvery("ADD_MOVIE", addMovie);
}

// function* fetchId() {
//   try {
//     const id = yield axios.get(`/api/movie/${action.payload}`);
//     yield put({ type: "SET_SELECTED_MOVIE", payload: id });
//   } catch {
//     console.log("add movie error");
//   }
// }

function* addMovie(action) {
  try {
    console.log(action.payload);
    
    const movie = yield
      axios({
        method: 'POST',
        url: '/api/movie',
        data: action.payload
      })
    // console.log("adding a dang movie", movie.data);
   yield put({ type: "FETCH_MOVIES" });
  } catch {
    console.log("add movie error");
  }
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchAllGenres() {
  try {
    const genres = yield axios.get("/api/genre");
    console.log("get all:", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
  } catch {
    console.log("get all error");
  }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// const newMovie = (state = [], action) => {
//   switch(action.type) {
//     case "NEW_MOVIE":
//       console.log('in NEW MOVIE');
//       return action.payload;
//     default:
//       return state;
//   }
// }

 // Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      console.log("in SET_GENRES", action.payload);
      return action.payload;
    default:
      return state;
  }
};

//used to store selected movie
const selectedMovie = (state = {}, action) => {
  console.log("In SELECTED MOVIE *********************");

  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    selectedMovie,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
