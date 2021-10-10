import manage from '../store';

describe('store', () => {
  it('should change the state', () => {
    const func = jest.fn((state) => {
      return { counter: state + 1 };
    });
    const state = manage.stateVal['counter'];
    manage.handleStuff('counter', func);
    expect(manage.stateVal['counter']).toBe(state + 1);
  });
});
