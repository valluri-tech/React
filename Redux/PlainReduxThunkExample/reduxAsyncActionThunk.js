//Synchronous actions : As soon as an action was dispatched - The state was immediately updated.

// Async Actions : We might do api calls asyncronously to fetch data from an endpoint
// .. and use that data in your application by storing in the redux store

// State + Action + Reducer

// State based on the functonality
const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleWare = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action -  write functions that return an action

//begin with constants for action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//Action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      {
        return {
          ...state,
          loading: true,
        };
      }

      break;

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    }
    default:
      break;
  }
};
const store = redux.createStore(reducer, applyMiddleware(thunkMiddleWare));

//Using Action Creators with Network requests.
//Redux - thunk :  It is a middle ware we will be applying to our redux store

//How to define an sync action creator using axios + redux thunk

// Async Action Creator
// Normally action creators return objects
// What the thunk middle ware brings to the table in the ability for an
// .. action creator to return a function instead of an Action Object
// const fetchUsers = () => {
//   return async function (dispatch) {
//     // Allowed to have side affect - no need to be pure
//     // This function can also dispatch actions - coz it receives a 'dispatch' argument

//     //before making an api call - we dispatch a fetch_users request
//     dispatch(fetchUsersRequest());
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//       const users = res.data.map((item) => item.email);
//       dispatch(fetchUsersSuccess(users));
//     } catch (err) {
//       dispatch(fetchUsersFailure(err.message));
//     }
//   };
// };

const fetchUsers = async function (dispatch) {
  // Allowed to have side affect - no need to be pure
  // This function can also dispatch actions - coz it receives a 'dispatch' argument

  //before making an api call - we dispatch a fetch_users request
  dispatch(fetchUsersRequest());
  try {
    const res = await axios.get("https://jsonp1laceholder.typicode.com/users");
    const users = res.data.map((item) => item.id);
    dispatch(fetchUsersSuccess(users));
  } catch (err) {
    dispatch(fetchUsersFailure(err.message));
  }
};

//subscribe to our store
store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(fetchUsers);
