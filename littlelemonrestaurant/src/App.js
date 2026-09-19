import './App.css';
import Header from  "./files/Header"
import Nav from "./files/Nav"
import Main from "./files/Main"
import Footer from "./files/Footer"

function App() {
  return (
    <>
      <div className='top-section'>
        <div className='container top-content'>
          <Header />
          <Nav />
        </div>
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
