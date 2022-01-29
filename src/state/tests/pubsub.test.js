import { subscribe, publish } from '../pubsub';

describe('pubsub', () => {
  it('should subscribe', () => {
    const myTestCallback = jest.fn();

    subscribe('event', myTestCallback);
    publish('event');

    expect(myTestCallback).toHaveBeenCalled();
  });
  it('should subscribe with an additional data parameter', () => {
    const myTestCallback = jest.fn();
    const data = 'test data';
    subscribe('event', myTestCallback);
    publish('event', data);

    expect(myTestCallback).toHaveBeenCalledWith(data);
  });
  it('should return callback value', () => {
    const myTestCallback = jest.fn(() => {
      return 32;
    });
    const data = 'test data';
    subscribe('event', myTestCallback);
    publish('event', data);

    expect(myTestCallback.mock.results[0].value).toBe(32);
  });
  it('should call subscribe for event2', () => {
    const myTestCallback1 = jest.fn();
    const myTestCallback2 = jest.fn();

    subscribe('event1', myTestCallback1);
    subscribe('event2', myTestCallback2);

    publish('event2');

    expect(myTestCallback1).toBeCalledTimes(0);
  });
  it('should not call the callback because of unsubscribe', () => {
    const myTestCallback = jest.fn();

    const unsub = subscribe('event', myTestCallback);
    unsub();

    publish('event');

    expect(myTestCallback).toBeCalledTimes(0);
  });
});
