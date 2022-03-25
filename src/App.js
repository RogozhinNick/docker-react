import logo from './logo.svg';
import './App.css';

function App() {
  console.log('Some')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Awesome!!! It's work with docker-compose file
        </p>
        <p>
          {'but not with direct command docker run -p 8080:8080 -v /app/node_modules -v ${pwd}:/app image id'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
