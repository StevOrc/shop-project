import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.comonent";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>I'm shop component</h1>;
};

const Car = () => {
  return <h1>I'm Car component</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="car" element={<Car />} />
      </Route>
    </Routes>
  );
}

export default App;
