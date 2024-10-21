// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="title_style_id">
        <h6 class="title-style_id">Hello, my name is Rohan!</h6>
        <h5 >Welcome to my website!</h5>
      </div>
    
    <div>
        <p >I am a student at <a href="https://www.utexas.edu/" target="_blank">The University of Texas at Austin</a>  majoring in Computer Engineering!</p>
    </div>
    
    <div class="outer_box">
        <div class="middle_box">My attempt at a CSS Box Model</div>
        <div class="inner_box">Middle Box</div>
    </div>

    <img src="https://adamnfineartist.com/cdn/shop/products/bevo-15-xv-fine-art-print-on-paper-sports-788_large.jpg?v=1681246899RL" alt="UT Bevo"></img>

    <div>  
        <input type="text" class="material-input" placeholder="Enter your name..." />
        <button class="material-button">PRESS FOR FUN</button>
    </div>
      </header>
    </div>
  );
}

export default App;
