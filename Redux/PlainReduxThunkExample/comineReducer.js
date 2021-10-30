//Synchronous actions : As soon as an action was dispatched - The state was immediately updated.
// Async Actions : We might do api calls asyncronously to fetch data from an endpoint
// .. and use that data in your application by

const redux = require("redux");

//Constants
const BUY_ICECREAM = "BUY_ICECREAM";
const BUY_CAKE = "BUY_CAKE";

// action generators
const buyIceCream = function () {
  return {
    type: BUY_ICECREAM,
    payload: "yay an Icecream",
  };
};

const buyCake = function () {
  return {
    type: BUY_CAKE,
    payload: "yay a cake",
  };
};

//initial state
let initialCakeState = {
  numofCakes: 10,
};

let initialIcecreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = function (state = initialCakeState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

const icecreamReducer = function (state = initialIcecreamState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

const rootReducer = redux.combineReducers({
  cakeR: cakeReducer,
  icecreamR: icecreamReducer,
});
const store = redux.createStore(rootReducer);

console.log(store.getState());
const unsubscribe = store.subscribe(function () {
  console.log("subscriber function called");
  console.log(store.getState());
});
store.dispatch(buyCake());
//Both of them will receive the action - the difference is that only one reducer acts and the other does not
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
