import './App.css';
import Home from './Components/Home';
import {useState} from "react";
import { Route, Switch } from 'react-router-dom';
import Participants from './Components/Participants';
import Register from './Components/Register';
import SelectWinner from './Components/SelectWinner';


function App() {
  const [title,setTitle] = useState("");
  return (
    <div className="App">
      <Switch>
        <Route path={"/raffles/:id/participants"} >
          <Participants title={title}  />
        </Route>
        <Route path={"/raffles/:id/winner"} >
          <SelectWinner title={title}  />
        </Route>
        <Route path={"/raffles/:id"}>
          <Register title={title}  />
        </Route>
        <Route exact path={"/"} >
          <Home title={title} setTitle={setTitle}/>
        </Route>
      </Switch>
    </div>


  );
}

export default App;
