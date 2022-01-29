import { publish } from '../state/pubsub';

import COUNTER from '../constants/actions';
import manage from '../state/store';

const Action = () => {
  return (
    <button
      onClick={() => {
        manage.handleStuff('counter', COUNTER.increment);
      }}
    >
      Increase Counter
    </button>
  );
};

export default Action;
