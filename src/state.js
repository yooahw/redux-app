import {creatStore} from 'redux';

function reducer(state, action) {
  switch(action.type) {
  case 'INCREASE_COUNTER':
    return {...state, ...{counter: (state.counter + 1)}};
  case 'RESET_COUNTER':
    return {...state, ...{counter: 0}};
  default:
    return state; 
  }
}
