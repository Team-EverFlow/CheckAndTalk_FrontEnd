import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
      <header class="navigationHeader">
        <img src={logo} alt="Logo" class="catLogo" />
        <nav class="navigationArea">
          <a href="연결할링크#" class="navigationTalk">Check</a>
          <a href="연결할링크#" class="navigationTalk">Talk</a>
        </nav>
        <a href="#" class="signOutButton">로그아웃</a>
      </header>
    </div>




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
