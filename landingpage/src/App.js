import './App.css';
import  home from './asserts/background image.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url('${home}')`}}>
        <nav className="nav">
          <h1>Team Infinity</h1>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </nav>
        <div className="content">
          <h1>Join Our Team</h1>
          <p>Be productive in Your life and Colabrate your solution</p>
          <a href="">Join Us</a>
        </div>
    </div>
  );
}

export default App;
