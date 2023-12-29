import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import App from './App';
import Top from './Pages/top/Top';
import Bottom from './Pages/bottom/Bottom';
import Jacket from './Pages/jacket/Jacket';
import Ring from './Pages/acc/ring';
import Earing from './Pages/acc/earing';
import Belt from './Pages/acc/belt';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/top" element={<Top />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/jacket" element={<Jacket />} />
        <Route path="/accessory/ring" element={<Ring />} />
        <Route path="/accessory/earing" element={<Earing />} />
        <Route path="/accessory/belt" element={<Belt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
