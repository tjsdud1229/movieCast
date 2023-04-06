import * as types from "../constants/actionTypes";

const initialState = {
  castList: [],
  filteredCastList: [],
  movieList: [],
  filteredList: [],
  page: 2,
};

const moviesReducer = (state = initialState, action) => {
  let castList;
  let movieList;
  let filteredList;
  let filteredCastList;
  let page = 2;

  switch (action.type) {
    case types.GET_MOVIE: {
      movieList = state.movieList.slice();
      action.payload.results.forEach((movie) => movieList.push(movie));
      filteredList = [...movieList];
      return {
        ...state,
        movieList,
        filteredList,
      };
    }

    case types.SEARCH_MOVIE: {
      filteredList = state.movieList.filter((movie) => {
        return movie.title.includes(action.payload);
      });
      return {
        ...state,
        filteredList,
      };
    }

    case types.SEARCH_CAST: {
      filteredCastList = state.castList.filter((cast) => {
        return cast.title.includes(action.payload);
      });
      return {
        ...state,
        filteredCastList,
      };
    }

    case types.ADD_MOVIE: {
      page = state.page + 1;
      movieList = state.movieList.slice();
      action.payload.results.forEach((movie) => movieList.push(movie));
      filteredList = [...movieList];
      return {
        ...state,
        movieList,
        filteredList,
        page,
      };
    }

    case types.ADD_CAST: {
      castList = [];
      filteredCastList = [...castList];
      action.payload.cast.forEach((cast) => castList.push(cast));
      return {
        ...state,
        castList,
        filteredCastList,
      };
    }

    default: {
      return state;
    }
  }
};

export default moviesReducer;
