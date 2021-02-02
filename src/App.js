
import './App.css';
import GlobalStyle from './Wael/globalStyles';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Navbar from './Wael/Navbar/Navbar';
import Footer from './Wael/Footer/Footer';
import Wael from './Wael/wael';
import Gallery from './Wael/Gallery/Gallery';
import Services from './Wael/Services/Services';
import Contact from './Wael/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
        <Route path='/' exact component={Wael} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact' exact component={Contact}/>
        
    
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
