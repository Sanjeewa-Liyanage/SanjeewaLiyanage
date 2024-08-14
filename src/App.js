import './App.css';
import About from './components/about';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/services';
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contactm';

function App() {
  return (
    <div className="App">
      <Header />
     
      <main style={{ paddingTop: "80px" }}>
        {
          <> <Home /><About /><Service/> <Portfolio /> <Contact/> </> 
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
