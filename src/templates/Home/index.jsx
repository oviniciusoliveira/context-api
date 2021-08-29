/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

function Home() {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <h1 onClick={() => actions.increase()}>Context API</h1>
    </div>
  );
}

export default Home;
