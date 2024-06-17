import "./App.css";
import Servicesection from "./components/Servicessection/Servicesection";
import CategoryPrev from "./components/categoryprev/Categoryprev";
import Mainheader from "./components/header/Mainheader";
import ImageSlider from "./components/imageSlider/Imageslider";
import Newproduct from "./components/newproduct/Newproduct";

function App() {
  return (
    <div className="font-montserrat">
      <Mainheader></Mainheader>
      <CategoryPrev />
      <Newproduct />
      <ImageSlider />
      <Servicesection />
    </div>
  );
}

export default App;
