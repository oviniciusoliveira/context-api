/* eslint-disable no-unused-vars */
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

function Home() {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((response) => console.log(response))
      .catch((error) => console.log(error.name, ':', error.message));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button text="Increase" onButtonClick={actions.increase} />
        <Button text="Decrease" onButtonClick={actions.decrease} />
        <Button text="Reset" onButtonClick={actions.reset} />
        <Button text="Set 10" onButtonClick={() => actions.setCounter({ counter: 10 })} />
        <Button text="Set 100" onButtonClick={() => actions.setCounter({ counter: 100 })} />
        <Button disabled={state.loading} text="Async Increase" onButtonClick={actions.asyncIncrease} />
        <Button disabled={state.loading} text="Async Error" onButtonClick={handleError} />
      </div>
    </div>
  );
}

export default Home;
