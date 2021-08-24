import './App.css';
import NasaComponent from './components/NasaComponent'
import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={NasaComponent} />
      </div>
    </Router>
  );
}

export default App;
