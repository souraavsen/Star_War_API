import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Character from "./component/Character";
import Planets from "./component/Planets";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";

function App() {
  const [character, setCharacter] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchcharacter = async () => {
      const res = await fetch("https://swapi.dev/api/people/?format=json");
      const data = await res.json();
      setCharacter(data.results);
      setLoading(false);
      console.log(data.results)
    };

    const fetchplanet = async () => {
      const res = await fetch("https://swapi.dev/api/planets/?format=json");
      const data = await res.json();
      setPlanet(data.results);
      setLoading(false);

    };

    fetchcharacter();
    fetchplanet();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Navbar />
          <Container>
            {loading ? (
              <Dimmer active inverted>
                <Loader  active>
                  Loading
                </Loader>
              </Dimmer>
            ) : (
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route exact path='/people/'>
                  <Character character={character} />
                </Route>
                <Route exact path='/planets/'>
                  <Planets planets={planet} />
                </Route>
              </Switch>
            )}
          </Container>
      </Router>
    </div>
  );
}

export default App;
