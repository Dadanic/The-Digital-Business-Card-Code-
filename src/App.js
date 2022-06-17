import logo from './logo.svg';
import './App.css';
import './styles.css';
import Picture from './components/Picture';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Picture/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
