import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Header,
  Footer,
} from './Components/index';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  Home,
  About,
  Homes,
  Apartments,
  Contact,
} from './Pages/index';

export const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}