const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

function cakeOrdered(){
  return {
    type: CAKE_ORDER,
    qyantity: 1
  }
}

function cakeRestocked(payload = 1){
  return {
    type: CAKE_RESTOCK,
    payload: payload
  }
}

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);
console.log('Initial State',  store.getState());

const unsubscribe = store.subscribe(()=> console.log('Updated State',  store.getState()));
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeRestocked(3))

unsubscribe();

