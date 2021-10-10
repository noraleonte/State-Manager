const subscribers = {};
export const publish = function (eventName, data) {
  if (!Array.isArray(subscribers[eventName])) {
    return;
  }
  subscribers[eventName].forEach((callback) => {
    callback(data);
  });
};

export const subscribe = function (eventName, callback) {
  if (!Array.isArray(subscribers[eventName])) {
    subscribers[eventName] = [];
  }
  subscribers[eventName].push(callback);
  return () => {
    subscribers[eventName] = subscribers[eventName].filter((cb) => {
      if (cb === callback) {
        return false;
      }
      return true;
    });
  };
};
