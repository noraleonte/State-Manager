import usePubsub from '../custom hooks/usePubsub';

const Counter = () => {
  const c = usePubsub('counter');
  return <h1>Here you will see the counter {c['counter']}</h1>;
};

export default Counter;
