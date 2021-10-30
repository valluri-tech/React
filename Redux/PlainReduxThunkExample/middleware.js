//extend Redux with custom functionality

//Kind of provides a third party entension point between dispatching an action and the moment
// .. it reaches the reducer.

// you would use middle ware for - logging / crash reporting / performing async tasks

//redux - logger : logs all important information related to redux

const redux = require("redux");
const reduxLoggerLib = require("redux-logger");
const reduxLoggerObj = reduxLoggerLib.createLogger();

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

const store = redux.createStore(
  rootReducer,
  redux.applyMiddleware(reduxLoggerObj)
);

console.log(store.getState());
const unsubscribe = store.subscribe(function () {
  //console.log(store.getState());
});
store.dispatch(buyCake());
//Both of them will receive the action - the difference is that only one reducer acts and the other does not
store.dispatch(buyIceCream());
unsubscribe();
