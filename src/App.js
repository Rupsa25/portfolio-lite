import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';


function App() {
  return (
    <div className="App">
      <>
        <Sidebar />
        <main className='main'>
          <Home />
          <About />
          <Resume />
          <Contact />
          <Blog />
          <Portfolio />
        </main>
      </>
    </div>
  );
}

export default App;
