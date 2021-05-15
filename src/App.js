// import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import AddContact from './components/AddContact';
import Todo from './components/Todo'
import Covid from './components/Covid';
import CovidStateWise from './components/CovidStateWise';

function App() {
   

  return (
    <>
    
    <Switch>
              <Route exact path ="/" component={AddContact}/>
              <Route path="/todo" component={Todo} />
              <Route path="/covid" component={Covid} />
              <Route path="/covidstatewise" component={CovidStateWise} />
              
     </Switch>
    </>
  );
}

export default App;
