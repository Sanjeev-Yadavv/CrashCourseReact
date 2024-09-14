// import logo from './logo.svg';
import './App.css';
import { GetData } from './components/GetData';
import MouseMove from './components/MouseMove';
import UpdateComponent from './components/updateComponent';


function App() {
  return (
    <div className="App">
    <GetData/>
    <MouseMove/>
    <UpdateComponent/>
    </div>
  );
}

export default App;
