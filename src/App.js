import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.component";
import Shop from "./compoments/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
