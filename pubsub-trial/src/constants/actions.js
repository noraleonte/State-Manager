const COUNTER = {
  increment: (state) => {
    return { counter: state + 1 };
  },
  decrement: (state) => {
    return { counter: state - 1 };
  },
};
export default COUNTER;
