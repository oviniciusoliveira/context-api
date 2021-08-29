/* eslint-disable no-unused-vars */
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

function Home() {
  const [state, actions] = useCounterContext();
  return (
    <div>
      <Heading />
      <div>
        <Button text="Increase" onButtonClick={actions.increase} />
        <Button text="Decrease" onButtonClick={actions.decrease} />
      </div>
    </div>
  );
}

export default Home;
