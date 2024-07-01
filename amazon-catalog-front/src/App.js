import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './screens/Home';
import Info from './screens/Info';
import New from './screens/New';
import NotFound from './screens/NotFound';

function App() {
  return (
      <BrowserRouter>
        <main>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/new" element={<New/>} />
              <Route path="/info/:id" element={<Info/>} />
              <Route path="/edit/:id" element={<Info edit/>} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
