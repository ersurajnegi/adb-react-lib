import "./App.css";
import { Button, useFetch, useButtonContext } from "adb-react-lib";
import ContextProvider from "./contextProvider";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useFetch();

  let responseTemp;

  // if (response) {
  //   responseTemp = (response as any).map((item: any) => (
  //     <p key={`${item.id}${item.userId}`}>{item.id}</p>
  //   ));
  // }
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">
          {isLoading ? (
            "<p>Loading....</p>"
          ) : (
            <>
              From Library Component
              <Button label="Test" />
              <br />
              <br />
              From Client App
              <Test />
              {responseTemp}
            </>
          )}
        </header>
      </div>
    </ContextProvider>
  );
}

export default App;

const Test = () => {
  const { counter, updateCount } = useButtonContext();
  const test = useSelector((state: any) => state.counter);

  return (
    <button onClick={updateCount}>
      Hi From Test {counter}, {test}
    </button>
  );
};
