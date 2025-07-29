import './App.css';
import Button from './component/Button';

function App() {
  const fun = () => {
    console.log("Clicked Hello")
  }
  return (
    <>
      <Button children={"Click"} size={"large"} funBtn={fun} color={"red"} />
    </>
  );
}

export default App;
