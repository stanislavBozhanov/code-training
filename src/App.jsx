import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h1>Hello, this is a training app</h1>
      <ul>
        <li>
          <Link to="/part-one/">Part One</Link>
        </li>
        <li>
          <Link to="/part-two/">Part Two</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
