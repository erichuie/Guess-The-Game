
import { BrowserRouter } from 'react-router-dom';
import NavBar from './routes-nav/NavBar';
import './App.css'
import RoutesList from './routes-nav/RoutesList';

/** App component for GuessGame
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * App -> { RoutesList, NavBar }
 */
function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <RoutesList />

    </BrowserRouter>

    </>
  )
}

export default App
