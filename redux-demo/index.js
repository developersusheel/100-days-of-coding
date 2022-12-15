const redux = require('redux'); 
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

// Action Creator
function orderedCake(){
  // Action
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  }
}

// Action Creator
function restockedCake(qty = 1){
  // Action
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  }
}

// State in single object
const initialState = {
  numOfCakes: 10,
}

// Reducer: (prevState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload 
      }
    default:
      return state
  }
}

// Create Store
const store = createStore(reducer)
console.log('Initial state', store.getState())

// Subscribe to Store
const unsubscribe = store.subscribe(()=> console.log('Updated State:', store.getState()))

// Listen to actions
store.dispatch(orderedCake())
store.dispatch(orderedCake())
store.dispatch(orderedCake())
store.dispatch(restockedCake(3))

// Unsubscribe from store
unsubscribe();