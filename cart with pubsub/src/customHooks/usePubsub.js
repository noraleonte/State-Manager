import { useState, useEffect } from 'react';

import { subscribe } from '../state/pubsub';
import manage from '../state/store';

const usePubsub = (eName) => {
  const [state, setState] = useState(manage.stateVal);
  useEffect(() => {
    subscribe(eName, (data) => {
      setState(manage.stateVal);
      console.log(data);
    });
  }, [state]);

  return state;
};

export default usePubsub;
