import './App.css';
import Header from  "./files/Header";
import Nav from "./files/Nav";
import Main from "./files/Main";
import Footer from "./files/Footer";
import ScrollToHash from './files/ScrollToHash';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <ScrollToHash />
      <div className='top-section'>
        <div className='container top-content'>
          <Header />
          <Nav />
        </div>
      </div>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
