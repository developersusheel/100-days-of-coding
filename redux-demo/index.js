const redux = require('redux'); 
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED';

// Action Creator
function orderedCake(){
  // Action
  return {
    type: CAKE_ORDERED,
    quantity: 1,
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

// Unsubscribe from store
unsubscribe();