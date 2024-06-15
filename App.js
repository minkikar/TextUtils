
import './App.css';
import Nav from './components/Nav'
import Forms from './components/Forms'

function App() {
  return (
    <>
    <Nav/>
    <div className="container">
    <Forms heading='Enter your text to analyse'/>
    </div>
    </>
  );
}

export default App;
