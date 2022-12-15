const redux               = require('redux'); 
const createStore         = redux.createStore
const bindActionCreators  = redux.bindActionCreators
const combineReducers     = redux.combineReducers
const applyMiddleware     = redux.applyMiddleware

const reduxLogger         = require('redux-logger'); 
const logger              = reduxLogger.createLogger();

const CAKE_ORDER          = 'CAKE_ORDER';
const CAKE_RESTOCK        = 'CAKE_RESTOCK';
const ICECREAM_ORDER      = 'ICECREAM_ORDER';
const ICECREAM_RESTOCK    = 'ICECREAM_RESTOCK';

// Action Creator
function orderCake(){
  // Action
  return {
    type: CAKE_ORDER,
    quantity: 1,
  }
}

// Action Creator
function restockCake(qty = 1){
  // Action
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  }
}

function orderIcecream(qty = 1){
  return{
    type: ICECREAM_ORDER,
    payload: qty,
  }
}

function restockIcecream(qty = 1){
  return{
    type: ICECREAM_RESTOCK,
    payload: qty,
  }
}

// State in single object
// const initialState = {
//   numOfCakes: 10,
//   numOfIcecream: 20
// }

const initialCakeState = {
  numOfCakes: 10,
}

const initialIcecreamState = {
  numOfIcecream: 10
}

// Reducer: (prevState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload 
      }
    default:
      return state
  }
}

// Reducer: (prevState, action) => newState
const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1
      }
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload 
      }
    default:
      return state
  }
}

// Combine Reducers
const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

// Create Store
const store = createStore(rootReducers, applyMiddleware(logger));
console.log('Initial state', store.getState())

// Subscribe to Store
const unsubscribe = store.subscribe(()=> {})

// Listen to actions
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions = bindActionCreators({orderCake, restockCake, orderIcecream, restockIcecream}, store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIcecream();
actions.restockIcecream(2);

// Unsubscribe from store
unsubscribe();