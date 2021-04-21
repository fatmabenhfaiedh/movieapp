import './App.css';
import MovieList from './Components/MovieList';
import {Route, Switch} from 'react-router-dom';
import Description from './Components/Description';
import moviesData from './moviesData';


function App() {
  return (
    <div className="App">
      <Switch>
      {/* <MovieList/>
      <Description/> */}

      <Route path= "/Description/:year" render={props => <Description {...props} movies={moviesData}/>}/>
      <Route  exact path= "/" component={MovieList}/> 
      </Switch>
    </div>
  );
}

export default App;
