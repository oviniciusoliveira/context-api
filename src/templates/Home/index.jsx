/* eslint-disable no-unused-vars */
import { useCounterContext } from '../../contexts/CounterContext';

function Home() {
  const [state, dispatch] = useCounterContext();
  return (
    <div>
      <p>Context API</p>
    </div>
  );
}

export default Home;
