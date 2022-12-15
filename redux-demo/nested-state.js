const redux = require('redux'); 
const initialState = {
  name: 'Susheel',
  address: {
    street: '123 Main Street',
    city: 'New Delhi',
    state: 'Delhi'
  }
}

const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(street){
  return{
    type: STREET_UPDATED,
    payload: street
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case STREET_UPDATED:
      return{
        ...state,
        address:{
          ...state.address,
          street: action.payload
        }
      }
    default:
      return state
  }
}

const store = redux.createStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(
  ()=> console.log('Updated State', store.getState())
);

store.dispatch(updateStreet('456 Main ST.'));

unsubscribe();