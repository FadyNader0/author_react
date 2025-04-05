import logo from './logo.svg';
import './App.css';
import Nav from './componets/navbar/nav';
import Home from './componets/home/home';
import About from './componets/about/about';
import Chapter from './componets/chapter/chapter';

function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px 0px" data-bs-smooth-scroll="true" class="section  scrollspy-example bg-body-tertiary rounded-2" tabindex="0">
      <Nav />
      <Home />
      <About />
      <Chapter />
    </div>
  );
}

export default App;
