import initial from '../constants/initial';

import { publish } from '../state/pubsub';

const initState = () => {
  if (localStorage.getItem('state')) {
    var local = JSON.parse(localStorage.getItem('state'));
  } else {
    local = { ...initial };
  }
  let state = { ...local };
  console.log('State initialized successfully');
  return state;
};
let state = initState();
const manage = {
  set stateVal(newVal) {
    state = { ...newVal };
  },
  get stateVal() {
    return state;
  },
  //a generic function that calls the actions
  handleStuff: (eName, action) => {
    state = { ...action(state[eName]) };
    localStorage.setItem('state', JSON.stringify(state));
    publish(eName, 'State of ' + eName + ' changed');
  },
};
export default manage;
