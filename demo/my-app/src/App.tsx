import "./App.css";
import { Button, useFetch, useButtonContext } from "adb-react-lib";
import { useSelector } from "react-redux";

function App() {
  //you can use the hooks which internally uses the context like this
  const { list, loadTheList } = useFetch();

  let responseTemp;

  if (list) {
    responseTemp = (list as any).map((item: any) => (
      <p key={`${item.id}${item.userId}`}>{item.id}</p>
    ));
  }
  const loadList = () => {
    loadTheList();
  };
  return (
    <div className="App">
      <header className="App-header">
        <>
          <button onClick={loadList}>Load the list</button>
          <br />
          From Library Component
          <Button label="Test" />
          <br />
          From passing as a Child
          <Button label="Test">
            <Child></Child>
          </Button>
          <br />
          From Client App
          <Test />
          {responseTemp}
        </>
      </header>
    </div>
  );
}

export default App;

const Test = () => {
  //you can use the context directly like this
  const { counter, updateCount } = useButtonContext();
  const test = useSelector((state: any) => state.counter);

  return (
    <button onClick={updateCount}>
      Hi From Test {counter}, {test}
    </button>
  );
};

const Child = () => {
  const { counter, updateCount } = useButtonContext();
  const test = useSelector((state: any) => state.counter);

  return (
    <button onClick={updateCount}>
      Hi From Child {counter}, {test}
    </button>
  );
};
