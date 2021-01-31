
import './App.css';
import GlobalStyle from './Wael/globalStyles';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Wael/Navbar/Navbar';
import Footer from './Wael/Footer/Footer'
import Wael from './Wael/wael';
function App() {
  return (
    <>
 <Router>
        <Switch>
        </Switch>
        <GlobalStyle />
        <Navbar />
        <Wael />
        <Footer />
      </Router>
    </>
  );
}

export default App;
