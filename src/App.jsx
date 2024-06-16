import "./App.css";
import CategoryPrev from "./components/categoryprev/Categoryprev";
import Mainheader from "./components/header/Mainheader";
import Newproduct from "./components/newproduct/Newproduct";

function App() {
  return (
    <div className="font-montserrat">
      <Mainheader></Mainheader>
      <CategoryPrev />
      <Newproduct />
    </div>
  );
}

export default App;
